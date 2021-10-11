const express = require("express");
const PORT = process.env.PORT || 4000;
const winesRouter = require("./routers/wines");

const app = express();

app.use("/wines", winesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
