// src/app/api/callback/route.ts
import { AuthorizationCode } from 'simple-oauth2';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const host = request.headers.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;

  const config = {
    client: {
      id: process.env.OAUTH_CLIENT_ID,
      secret: process.env.OAUTH_CLIENT_SECRET,
    },
    auth: {
      tokenHost: 'https://github.com',
      tokenPath: '/login/oauth/access_token',
      authorizePath: '/login/oauth/authorize',
    },
  };

  try {
    const client = new AuthorizationCode(config);
    const accessToken = await client.getToken({
      code,
      redirect_uri: `${baseUrl}/api/callback`,
    });

    // Redirect back to the admin page with the token
    return NextResponse.redirect(
      `${baseUrl}/admin/#access_token=${accessToken.token.access_token}`
    );
  } catch (error) {
    console.error('Access Token Error', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
