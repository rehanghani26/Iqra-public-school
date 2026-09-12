import { NextResponse } from 'next/server';
import { getPublicPortalData } from '@/services/portalApi';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await getPublicPortalData();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
