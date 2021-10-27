const { Router } = require("express");
const { sendEmail } = require("../Lib/nodemailer");

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const { data } = req.body;
    sendEmail(data);
    res.status(201).send("Thank you for your message!");
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
