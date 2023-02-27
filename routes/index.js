const { Router } = require('express');
const path = require('path');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');



dotenv.config({ path: path.join(__dirname, '../.env') });

const router = Router();

// const headers = { "Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Credentials': true }

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.post('/formSubmit', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body.data
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    name: 'www.gmail.com',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: `New contact request from: ${firstName} ${lastName} ${phone}`,
    text: message
  };
  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send('success')
    }
  });
});

module.exports = router;
