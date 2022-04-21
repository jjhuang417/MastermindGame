// Frameworks & Packages
const express = require("express");
const axios = require("axios");

// App & Port
const app = express();
const port = 3000;

// Serving static files
app.use(express.static("client/dist"));
app.use(express.json());

// Connecting on the port
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});

// Endpoint for page initial render
app.get("/initialize", (req, res) => {
  fetchCode(req, res);
});

// F(n) to fetch code
const fetchCode = async (req, res) => {
  let intURL =
    "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new";
  await axios
    .get(intURL)
    .then((response) => {
      let code = response.data;
      code = code.split("\n");
      code.pop();
      res.status(200).send(code);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.fetchCode = fetchCode;
