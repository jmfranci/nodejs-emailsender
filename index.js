var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sender@gmail.com',
    pass: 'senderPassword'
  }
});

var mailOptions = {
  from: 'sender@gmail.com',
  to: 'recipient@gmail.com',
  subject: 'Enviando email usando Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
});