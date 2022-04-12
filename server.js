const express = require('express');
const app = express();
const port = 3000;

// Serving static files
app.use(express.static('client/dist'));
app.use(express.json());

// Connecting on the port
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});

