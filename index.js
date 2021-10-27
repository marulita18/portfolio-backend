const express = require("express");
const corsMiddleWare = require("cors");
const loggerMiddleWare = require("morgan");
const PORT = 4000;
const winesRouter = require("./routers/wines");
const authRouter = require("./routers/auth");
const orderRouter = require("./routers/order");
const supportRouter = require("./routers/support");

const app = express();
app.use(corsMiddleWare());
app.use(express.json());

app.use(loggerMiddleWare("dev"));

app.use("/auth", authRouter);
app.use("/wines", winesRouter);
app.use("/order", orderRouter);
app.use("/support", supportRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
