const { exchangeWebFlowCode } = require("@octokit/oauth-methods");

exports.handler = async function (event) {
  const { clientId, clientSecret, code } = JSON.parse(event.body);

  try {
    const {
      authentication: { token },
    } = await exchangeWebFlowCode({
      clientType: "github-app",
      clientId,
      clientSecret,
      code,
    });

    return {
      statusCode: 201,
      body: JSON.stringify({ token }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 404,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
