import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();
    const correctPasscode = process.env.ADMIN_PASSCODE || 'usman804567';

    if (passcode === correctPasscode) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false, message: 'Incorrect passcode' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
