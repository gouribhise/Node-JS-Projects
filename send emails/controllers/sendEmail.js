const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmail= async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'giuseppe.bogan@ethereal.email',
        pass: 'g3WfyqKBXYdchCw16H'
    }
});

  let info = await transporter.sendMail({
    from: '"123coding" <123coding@gmail.com>',
    to: 'bar@example.com',
    subject: 'Hello',
    html: '<h2>Sending Emails with Node.js</h2>',
  });

  res.json(info);
};

 
module.exports = sendEmail;