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
  const host = request.headers.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;

  try {
    const client = new AuthorizationCode(config);
    const authorizationUri = client.authorizeURL({
      redirect_uri: `${baseUrl}/api/callback`,
      scope: 'repo,user',
    });

    return NextResponse.redirect(authorizationUri);
  } catch (error) {
    console.error('Authorization Error:', error);
    return NextResponse.json(
      { error: 'Authorization failed' },
      { status: 500 }
    );
  }
}
