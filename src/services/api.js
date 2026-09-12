/**
 * @file api.js
 * @description Centralized HTTP client mirroring ui/src/services/api.js
 * Handles baseURL, headers, authorization token, and response normalization.
 */

const LOCAL_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const baseURL = `${LOCAL_URL}/api/v1`;

class ApiClient {
  constructor(base) {
    this.baseURL = base;
  }

  async request(endpoint, options = {}) {
    const url = endpoint.startsWith('http') ? endpoint : `${this.baseURL}${endpoint}`;

    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    };

    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token && token !== 'undefined' && token !== 'null') {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    const config = {
      ...options,
      headers,
    };

    if (config.body && typeof config.body === 'object') {
      config.body = JSON.stringify(config.body);
    }

    const res = await fetch(url, config);

    let data;
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await res.json();
    } else {
      data = await res.text();
    }

    if (!res.ok) {
      const error = new Error(data?.message || `HTTP ${res.status}: ${res.statusText}`);
      error.response = { status: res.status, data };
      throw error;
    }

    return { data, status: res.status };
  }

  get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' });
  }

  post(endpoint, body, options = {}) {
    return this.request(endpoint, { ...options, method: 'POST', body });
  }

  put(endpoint, body, options = {}) {
    return this.request(endpoint, { ...options, method: 'PUT', body });
  }

  patch(endpoint, body, options = {}) {
    return this.request(endpoint, { ...options, method: 'PATCH', body });
  }

  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  }
}

export const api = new ApiClient(baseURL);
export default api;
