const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Serving static files
app.use(express.static('client/dist'));
app.use(express.json());

// Connecting on the port
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});

app.get('/num', (req, res) => {
  axios.get('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new')
  .then((response) => {
    res.status(200).send(response.data)
  })
  .catch((err) => {
    res.status(404).send(err);
  })
})