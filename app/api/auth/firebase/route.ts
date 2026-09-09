import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { idToken } = await req.json();

    if (!idToken) {
      return NextResponse.json({ error: 'Missing ID Token' }, { status: 400 });
    }

    // Verify token directly using Google OAuth API (No Private Key Required)
    const tokenRes = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`);
    
    if (!tokenRes.ok) {
      return NextResponse.json({ error: 'Invalid or expired Firebase token' }, { status: 401 });
    }

    const payload = await tokenRes.json();
    const { sub: googleUid, email, name, picture } = payload;

    if (!email) {
      return NextResponse.json({ error: 'Email missing from auth payload' }, { status: 400 });
    }

    // Database Sync with Neon PostgreSQL
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      const generatedUsername = (name || email.split('@')[0])
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '') + Math.floor(1000 + Math.random() * 9000);

      user = await prisma.$transaction(async (tx) => {
        const newUser = await tx.user.create({
          data: {
            email,
            username: generatedUsername,
            googleId: googleUid,
            avatarUrl: picture,
            passwordHash: '',
            emailVerified: true,
            role: 'USER',
          },
        });

        await tx.wallet.create({
          data: { userId: newUser.id },
        });

        return newUser;
      });
    } else if (!user.googleId) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: { googleId: googleUid, avatarUrl: user.avatarUrl || picture },
      });
    }

    // Issue Secure HttpOnly Session Cookie
    const sessionData = JSON.stringify({
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    });

    const response = NextResponse.json({
      success: true,
      user: { id: user.id, email: user.email, role: user.role },
    });

    response.cookies.set('virelio_session', sessionData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 Days
    });

    return response;
  } catch (error: any) {
    console.error('Firebase Auth Error:', error);
    return NextResponse.json({ error: 'Authentication internal error' }, { status: 500 });
  }
}
