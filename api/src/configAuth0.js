const { AUTH0_CLIENT_SECRET, AUTH0_CLIENT_ID, AUTH0_DOMAIN } = process.env

const configAuth0 = {
    authRequired: false,
    auth0Logout: true,
    secret: AUTH0_CLIENT_SECRET,
    baseURL: 'http://localhost:3000',
    clientID: AUTH0_CLIENT_ID,
    issuerBaseURL: AUTH0_DOMAIN
};



module.exports =  {configAuth0};

