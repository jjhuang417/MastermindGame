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
  let intURL =
    "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new";
  axios
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
});

// Answer sequence from the random API
// let answerSequence;

// API Call to get sequence
// const getAnswer = async () => {
//   let intURL =
//     "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new";
//   let result = await axios.get(intURL);
//   answerSequence = result.data.split("\n");
//   answerSequence.pop();
//   // console.log('answer on start up:', answerSequence);
// };

// const getCode = async () => {
//   let intURL =
//     "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new";
//   let rawCode = await axios.get(intURL);
//   let code = rawCode.data.split("\n");
//   code.pop();
//   console.log(code);
//   return code;
// };

// getAnswer();

// Function for checking game logic
// const checkGuess = (answer, guess) => {
//   let feedback = [];
//   for (let i = 0; i < guess.length; i++) {
//     // we want to first find all the correct nums and change them to -1s to eliminate them.
//     if (guess[i] === answer[i]) {
//       feedback.push("correct"); // add 'correct' into the feedback arr
//       guess[i] = -1; // change the element to -1.
//       answer[i] = -1; // change the element to -1.
//     }
//   }
//   for (let j = 0; j < answer.length; j++) {
//     // Need to a loop to check the rest of the answers
//     let include = false; // include a true or false flag to check to see if it's a partial number
//     if (answer[j] === -1) continue; // whenever we hit a -1 we skip since we already checked the num
//     for (let k = 0; k < guess.length; k++) {
//       // use a second loop to iterate over the guess
//       if (guess[k] === -1) {
//         // make sure we skip -1s in the guess
//         continue;
//       } else if (answer[j] === guess[k]) {
//         // if an elemnt in the guess equals to one in the answer, this means we hit a partial
//         feedback.push("partial"); // push it into the feedback arr
//         guess[k] = -1; // turn the elemnt in guess into a -1 to make sure we dont double count. The answer will only be checked once
//         include = true;
//         break;
//       }
//     }
//     if (!include) feedback.push("wrong"); // push wrong into the array if none of the blocks above ran.
//   }
//   return feedback.sort(); // sort the arr to make sure the correct answers come first.
// };

// Route for guess checking
// app.get("/submit", (req, res) => {
//   let copyAnswer = answerSequence.slice(0);
//   let copyInput = req.query.input.slice(0);
//   // console.log('answer: ', copyAnswer);
//   // console.log('player: ', copyInput);
//   let results = checkGuess(copyAnswer, copyInput);
//   res.status(200).send(results);
// });

// Route for grabbing the right answer once the player loses
// app.get("/answer", (req, res) => {
//   const joinedAnswer = answerSequence.join("");
//   res.status(200).send(joinedAnswer);
// });
