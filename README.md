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