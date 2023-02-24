const { Router } = require('express');
const path = require('path');
const dotenv = require('dotenv');


dotenv.config({ path: path.join(__dirname, '../.env') });

const router = Router();

// const headers = { "Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Credentials': true }

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});



router.post('/forgotPassword', async (req, res) => {
  console.log(process.env.EMAIL_ADDRESS, process.env.EMAIL_PASSWORD)
  const { emailValue } = req.body;
  if (!emailValue) {
    res.json('Invalid');
  } else {
    const user = await getUserName(emailValue);
    if (user) {
      const token = crypto.randomBytes(20).toString('hex');
      await updateForgotPassword(user.dataValues.id, token, Date.now() + 360000);
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        name: 'www.gmail.com',
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      const mailOptions = {
        from: 'donkwizard@gmail.com',
        to: `${user.dataValues.email}`,
        subject: 'Your password reset link',
        text: 'You are receiving this message in response to your request to reset your password.\n\n'
          + 'Please click the following link or paste into your browser to complete the process (link expires within 1 hour).\n\n'
          + `http://donkwizard.net/resetpassword/${token}\n\n`
          + 'If you did not request this, please ignore and your password will remain unchanged\n',
      };
      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          console.log(err);
        } else {
          console.log(response);
          res.status(200);
        }
      });
    }
  }
});

module.exports = router;
