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
  answerSequence = result.data.split('\n');
  answerSequence.pop();
  for (let i = 0; i < answerSequence.length; i++) {
    answerSequence[i] = Number(answerSequence[i]);
  }
  console.log(answerSequence);
};

getAnswer();

// Function for checking game logic
const checkGuess = (answer, guess) => {
  let feedback = [];
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      feedback.push('correct');
      guess[i] = -1;
      answer[i] = -1;
    }
  }
  for (let j = 0; j < guess.length; j++) {
    let include = false;
    if (answer[j] === -1) continue;
    for (let k = 0; k < guess.length; k++) {
      if (guess[k] === -1) {
        continue;
      } else if (answer[j] === guess[k]) {
        feedback.push('partial');
        guess[k] = -1;
        include = true;
        break;
      }
    }
    if (!include) feedback.push('wrong');
  }
  return feedback.sort();
}

// Endpoint for page initial render
app.get('/initialize', (req, res) => {
  getAnswer();
  res.status(200).send();
});

// Route for guess checking
app.get('/submit', (req, res) => {
  let copyAnswer = answerSequence.slice(0);
  let copyInput = req.query.input.slice(0);
  res.send(checkGuess(copyAnswer, copyInput))
});
