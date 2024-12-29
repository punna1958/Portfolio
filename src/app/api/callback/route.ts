import { AuthorizationCode } from 'simple-oauth2';

export default async function handler(req, res) {
  const host = req.headers.host;
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

  const { code } = req.query;
  const client = new AuthorizationCode(config);

  try {
    const accessToken = await client.getToken({
      code,
      redirect_uri: `${baseUrl}/api/callback`,
    });
    res.redirect('/admin/#access_token=' + accessToken.token.access_token);
  } catch {
    res.status(500).json('Authentication failed');
  }
}
