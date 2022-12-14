const nodemailer = require("nodemailer");
const fs = require("fs");
var argv = require('yargs').argv;
var MAILINGLIST = 'akhil.aggarwal@comprotechnologies.com,rupsi.mehta@comprotechnologies.com,vimal.mishra@comprotechnologies.com,megha.garg@comprotechnologies.com';


// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();
console.log(argv.emailId)
console.log(argv.emailPwd)
  // create reusable transporter object using the default SMTP transport
  let transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: argv.emailId,
        pass: argv.emailPwd
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: argv.emailId, // sender address
    to: "mehta.rupsi@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);