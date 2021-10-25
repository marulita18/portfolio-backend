const { Router } = require("express");
const nodemailer = require("nodemailer");

const router = Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chiennoirvinos@gmail.com",
    pass: "chien2021", // naturally, replace both with your real credentials or an application-specific password
  },
});

const mailOptions = {
  from: `${user.email}`,
  to: "chiennoirvinos@gmail.com",
  subject: "Thank you for your message!",
  text: "We appreciate your message and we will get back to you ASAP!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
