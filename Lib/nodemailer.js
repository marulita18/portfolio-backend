const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chiennoirvinos@gmail.com",
    pass: "chien2021", // naturally, replace both with your real credentials or an application-specific password
  },
});

const configOptions = (options) => ({
  from: `${options.sender}`,
  to: `${options.receiver}`,
  subject: `${options.subject}`,
  text: `${options.text}`,
});

const sendEmail = (data) => {
  const mailOptions = configOptions({
    sender: "chiennoirvinos@gmail.com",
    receiver: data.email,
    subject: "Thank you for reaching out to us!",
    text: "Thank you for your email, we will get back to you asap!",
  });

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendEmail };
