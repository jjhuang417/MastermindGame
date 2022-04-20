<img src='./readmeImages/Mastermind.png'>

## Description

This is the Mastermind game, originally designed by Mordecai Meirowitz in 1970. The player will be playing against the mastermind who has chosen a 4 number sequence. To defeat the mastermind, you will have to guess this code and save yourself.

## How do I use this?

1. Install dependencies: `npm install`
2. Start the node server: `npm run server`
3. Open up a new terminal and run webpack: `npm run build`
4. Open the app at http://localhost:3000.

## Rules

- The player will have 10 tries to guess the correct 4 number code.
- Each number in the code ranges from 0 - 7 and ***CAN*** contain duplicates.
- After each guess, one of the 3 response below can happen for each number:<br> 1. A green dot (🟢) indicates a correct number is in the right location.<br>2. A yellow dot (🟡) indicates a correct number but not in the right location. <br>3. A black dot (⚫) indicates that a number is incorrect.
- Keep in mind that the position of the dots does not align with the positions of the numbers in the guess.

## Thought Process
1. My first step was to design a wireframe for my game and think of all the pieces I would need in order to make this game functional.
<img src='./readmeImages/wireframeAdjusted.png'>

2. I chose React.js for this project because I like how fast, efficient, modular you can be with it. I then designed the component hierarchy, helping me visualize how components will be mounted and how data will flow.
<img src='./readmeImages/components.png'>

3. 

## Tech Stack

- React.js
- Node.js
- Express.js

## Demo


Mastermind Game
1. Fork repo
2. Run npm install

Engineering Journal

4/11/22
- Created the todo.txt

4/12/22
- Made the API call from the server to get the sequence.
- The API provided the sequence as a string with line breaks.
- I split the string to turn it into an array and popped off the last line break.
- Made an API call from the front end to get the sequence from the server.

4/13/22
- I need to save the random sequence as a variable so I can freely use it in the rest of my code.
- I need to handle the asynchronous nature of the API call.
- I used async / await to ensure the API call results are saved into my global variable.
- Now I can use the answerSequence to create game logic.

4/14/22
- Create functionality for the front end Enter button. Make a request to hit the submit route.
- Send the userInput array to the route
- Use a loop & 2 pointers to check against answer arr.
- Initialize 2 counter to check for characters that match and characters that are same but dont match location.
- Send back an object containing data to signal the guess results.
- Was using postman to test the route, i was getting wrecked by the data type comparison.
- I needed an array but the request was stringifying everything. I had to modify it to an actual array.

4/15/22
- Encountered a bug where the server was sending back the wrong feedback. It would turn all 'partial' into wrongs.
- Originally I was sneding back the feedbacks without first saving it into a variable. After saving it into a variable and then sending it, it was finally outputting the right resutls.

4/16/22
- Implementing styling and modal

4/17/22
- Refactoring most of the application from answer checking on the backend to the frontend.

4/18/22
- Implemented win conditions.
- While implementing lose condition, tried to pop out modal when tries is equal to 0. However, I ran into an issue with the way setting state is asynchronous. Number of tries is based off of the length of the history state, but that part of the function is synchronous. While setting history is asynchronous, the logic to evaluate the lose condition was activating based on tries prior to setting history.

4/19/22
- Implemented score tracking via local storage.
- Implemented a feature to focus onto the input when the page refresh.