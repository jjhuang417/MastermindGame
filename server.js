// Frameworks & Packages
const express = require('express');
const axios = require('axios');

// App & Port
const app = express();
const port = 3000;

// Serving static files
app.use(express.static('client/dist'));
app.use(express.json());

// Connecting on the port
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});

// API Call to get sequence
app.get('/num', (req, res) => {
  let intURL = 'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new';
  axios.get(intURL)
  .then((response) => {
    let intArr = response.data.split('\n');
    intArr.pop();
    res.status(200).send(intArr);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
})