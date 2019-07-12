const sgMail = require('@sendgrid/mail');

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'user@gmail.com',
  from: 'user@hotmail.com',
  templateId: 'd-3f2d4cd8dd3d48878a293f9e484ba9fc',
  dynamic_template_data: {
    email: "user@gmail.com",
    url: "https://user.auth0.com/ios/verification/",
    title: "Welcome!",
    mainText: "Welcome",
    textButton: "CONFIRM YOUR EMAIL",
  },
};

sgMail.send(msg)
.then((response)=>{console.log('RESPONSE: ',response)})
.catch((error)=>{console.log('ERROR: ',error)});