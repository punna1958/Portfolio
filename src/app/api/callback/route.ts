import { AuthorizationCode } from 'simple-oauth2';
import { NextResponse } from 'next/server';

const config = {
  client: {
    id: process.env.OAUTH_CLIENT_ID || '',
    secret: process.env.OAUTH_CLIENT_SECRET || '',
  },
  auth: {
    tokenHost: 'https://github.com',
    tokenPath: '/login/oauth/access_token',
    authorizePath: '/login/oauth/authorize',
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const host = request.headers.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    const client = new AuthorizationCode(config);
    const tokenParams = {
      code: code,
      redirect_uri: `${baseUrl}/api/callback`,
    };

    const accessToken = await client.getToken(tokenParams);
    const redirectUrl = `${baseUrl}/admin/#access_token=${accessToken.token.access_token}`;

    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error('Access Token Error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
