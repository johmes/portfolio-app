const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const cors = require("cors")({
  origin: true
});

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  },
});

// auth: {
//   type: 'OAuth2',
//   user: "portfolio-johannes-mensalo@appspot.gserviceaccount.com",
//   serviceClient: functions.config().gmail.serviceclient,
//   privateKey: functions.config().gmail.privatekey,
//   accessToken: functions.config().gmail.accesstoken,
//   expires: 1484314697598
// }

exports.submit = functions.region('europe-west1').https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    console.log("OPTIONS")
    res.end();
  } else {
    cors(req, res, () => {
      if (req.method !== "POST") {
        console.log("NOT POST")
        return
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `${req.body.name} just messaged me from my portfolio`,
        text: req.body.message,
        html: `
          Moikka, oon <h3>${req.body.name}</h3>
          <p>${req.body.message}</p>`,
      }

      return mailTransport.sendMail(mailOptions).then(() => {
        console.log("New email sent to:", gmailEmail);
        res.status(200).send({
          isEmailSend: true
        });
        return;
      })
    });
  }

});