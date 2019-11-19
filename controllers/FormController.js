const nodeMailer = require('nodemailer');
require('dotenv').config();

exports.sendFrom = (req,res)=>{
  console.log(req.body);
  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    from: 'test1@gmail.com',//Change
    to: 'test2@gmail.com',//Change
    subject: `${req.body.name} ${req.body.phone}`,
    body: req.body.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }else{
      console.log('Message %s sent: %s', info.messageId, info.response);
    }
  });

  res.redirect('/');
};