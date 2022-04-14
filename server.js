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

// Answer sequence from the random API
let answerSequence;

// API Call to get sequence
const getAnswer = async () => {
  let intURL = 'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new';
  let result = await axios.get(intURL);
  answerSequence = result.data;
};

// Endpoint for page initial render
app.get('/initialize', (req, res) => {
  getAnswer();
  res.status(200).send();
});

// Route for game logic
app.post('/submit', (req, res) => {
  let rightSpot = 0;
  let included = 0;
  let playerGuess = req.body;
  for (let i = 0; i < answerSequence.length; i += 1) {
    if (playerGuess[i] === answerSequence[i]) rightSpot += 1;
    if (playerGuess.includes(answerSequence[i]) && playerGuess[i]!== answerSequence[i]) included += 1;
    if (rightSpot === 4) res.status(200).send();
  }
  // here is where game logic
  // compare userInput with answerSequence
  // send the request back with an object
});

// Answer: [1, 2, 3, 4];
// Player: [0, 0, 2, 2];
