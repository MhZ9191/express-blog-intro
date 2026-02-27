console.log("Hello ", process.env.username);

const express = require("express");
const app = express();
const port = 3000;
const appUrl = "http://127.0.0.1:3000";

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(port, () => {
  console.log(`In ascolto su ${appUrl}`);
});
