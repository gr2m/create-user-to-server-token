# create-user-to-server-token

> static website to generate user-to-server tokens scoped to a GitHub App's installations and permissions

Open the static HTML form at: [create-user-to-server-token.netlify.app](https://create-user-to-server-token.netlify.app).

The Login flow is using one static function ([`netlify/functions/oauth.js`](netlify/functions/oauth.js)) because GitHub's API to exchange an OAuth code for an access token is not CORS enabled.

## License

[ISC](LICENSE.md)
