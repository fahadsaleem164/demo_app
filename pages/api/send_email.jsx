

var nodemailer = require('nodemailer');

export default (req, res) => {

    console.log(req.query.email)


var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5a9e72ae7ae6a2",
    pass: "d2a7c4eafe2051"
  }
});

var mailOptions = {
  from: req.query.email,
  to: 'fahadsaleem164@outlook.com',
  subject: 'Nice Nodemailer test with Next JS',
  text: 'Hey there, it’s our first message sent with Nodemailer ',
  html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br />',
  
};

transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
 res.end()
});

}
