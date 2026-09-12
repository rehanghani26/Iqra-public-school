import { NextResponse } from 'next/server';
import { submitInquiry } from '@/services/portalApi';

export async function POST(request) {
  try {
    const body = await request.json();
    const result = await submitInquiry(body);
    return NextResponse.json(result, { status: result.success ? 200 : 400 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
