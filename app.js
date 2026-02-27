console.log("Hello ", process.env.username);

const express = require("express");
const app = express();
const port = 3000;
const appUrl = "http://127.0.0.1:3000";

const dataValues = {
  results: [
    {
      title: "Post uno",
      content: "Hello World",
      image: "ciambellone.jpeg",
      tags: ["one", "two"],
    },
    {
      title: "Post due",
      content: "Hello World",
      image: "cracker_barbabietole.jpeg",
      tags: ["one", "two"],
    },
    {
      title: "Post tre",
      content: "Hello World",
      image: "pane_fritto_dolce.jpeg",
      tags: ["one", "two"],
    },
    {
      title: "Post quattro",
      content: "Hello World",
      image: "pasta_barbabietola.jpeg",
      tags: ["one", "two"],
    },
    {
      title: "Post cinque",
      content: "Hello World",
      image: "torta_paesana.jpeg",
      tags: ["one", "two"],
    },
  ],
  success: true,
};

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json(dataValues);
});

app.listen(port, () => {
  console.log(`In ascolto su ${appUrl}`);
});
