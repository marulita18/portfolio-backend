const express = require("express");
const corsMiddleWare = require("cors");
const loggerMiddleWare = require("morgan");
const PORT = 4000;
const winesRouter = require("./routers/wines");

const app = express();

app.use(corsMiddleWare());
app.use(loggerMiddleWare("dev"));
app.use("/wines", winesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
