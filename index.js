const express = require("express");
const corsMiddleWare = require("cors");
const loggerMiddleWare = require("morgan");
const PORT = 4000;
const winesRouter = require("./routers/wines");
const authRouter = require("./routers/auth");

const app = express();

app.use(express.json());
app.use(corsMiddleWare());
app.use(loggerMiddleWare("dev"));

app.use("/auth", authRouter);
app.use("/wines", winesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
