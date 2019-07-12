var AuthenticationClient = require('auth0').AuthenticationClient;
var ManagementClient = require('auth0').ManagementClient;

require('dotenv').config();

var auth0 = new AuthenticationClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET
});

var management = new ManagementClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'read:users update:users read:process.env.user_idp_tokens'
});

function deleteUsers () {
  management.getUsers(null, function (err, users) {
    if (err) console.log('ERROR: ',err)
    else{
      users.forEach(user => {
        if(!user.email.includes('@gmail.com') && user.email!=='user@user.com' && !user.email.includes('@moove-it.com')){
          management.deleteUser({ id: user.process.env.user_id }, function (errU) {
            if (errU) console.log('ERROR USER: ',user.process.env.user_id, user.email, errU)
            else  console.log('USER DELETED: ',user.email)
          });
        }
      });
    }
  });
};

//deleteUsers();

/*
management.getUsersByEmail('user@gmail.com', function (err, users) {
  console.log(users, err);
});*/

/*
const  accessToken = "";
auth0.getProfile(accessToken, function (err, userInfo) {
  console.log(userInfo, err);
});
*/
/*
var params = {
	process.env.user_id: process.env.USER_ID
};
management.sendEmailVerification(params, function (err, response) {
  console.log('sendEmailVerification: ',err, response);
});

auth0.requestChangePasswordEmail({email:'user@gmail.com',connection: process.env.AUTH0_CONNECTION},
function (err, response) {
  console.log('requestChangePasswordEmail 1: ',err, response);
});
*/
/*
var params = { id: process.env.USER_ID };

var data = {
  "user_metadata": {
  	"u_m1": "u_m1"
  },
  "app_metadata": {
  	"app_m1": "app_m1"
  },
  "given_name": "John",
  "family_name": "Doe",
  "name": "John Doe",
  "picture": "https://secure.gravatar.com/avatar/15626c5e0c749cb912f9d1ad48dba440?s=480&r=pg&d=https%3A%2F%2Fssl.gstatic.com%2Fs2%2Fprofiles%2Fimages%2Fsilhouette80.png",*/
  /*"password": "password",
  "connection": process.env.AUTH0_CONNECTION,
  "client_id": process.env.AUTH0_CLIENT_ID
};
/*
management.updateUser(params, data, function (err, user) {
  if (err) console.log('ERROR: ',err);
  else console.log(user);
});*/
/*
var data = {
  process.env.user_id: process.env.USER_ID,
};

management.createEmailVerificationTicket(data, function (err, response) {
  if (err) console.log('ERROR createEmailVerificationTicket: ',err);
  else console.log('RESPONSE createEmailVerificationTicket: ', response);
});

management.createPasswordChangeTicket(data, function (err, response) {
  if (err) console.log('ERROR createPasswordChangeTicket: ',err);
  else console.log('RESPONSE createPasswordChangeTicket: ', response);
});
*/