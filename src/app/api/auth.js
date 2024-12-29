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

  const client = new AuthorizationCode(config);

  const authorizationUri = client.authorizeURL({
    redirect_uri: `${baseUrl}/api/callback`,
    scope: 'repo,user',
  });

  res.redirect(authorizationUri);
}
