import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  const { pin } = await req.json();
  const hashedInput = crypto.createHash('sha256').update(pin || '').digest('hex');
  const targetHash = process.env.ADMIN_SECRET_PIN_HASH;

  if (hashedInput === targetHash) {
    const res = NextResponse.json({ success: true });
    res.cookies.set('virelio_admin_session', 'authenticated', { httpOnly: true, path: '/' });
    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
