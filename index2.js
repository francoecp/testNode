var Auth0 = require('react-native-auth0')
require('dotenv').config();

const auth0 = new Auth0({ domain: process.env.AUTH0_DOMAIN, clientId: process.env.AUTH0_CLIENT_ID });

auth0.auth.passwordRealm({
    username,
    password,
    realm: process.env.AUTH0_CONNECTION,
    audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
  })
  .then((data)=>{console.log('loginInfo: ',data)})
  .catch((err)=>{console.log('loginInfo ERROR: ',err)});
