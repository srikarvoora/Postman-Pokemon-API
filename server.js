// Import required modules
const express = require('express');
const bodyParser = require('body-parser');  // Middleware to handle POST request body
const app = express();
const mongoose = require('mongoose');

// Use bodyParser middleware to parse incoming request bodies
app.use(express.json());  // Parses application/json

const playersRouter = require('./players'); // Adjust the path if needed

  // Set the port for the server as default
  const port = 3000;

// Create a simple test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});


// Middleware to parse JSON
app.use(express.json());


// Use players router
app.use('/players', playersRouter);


// Connect to MongoDB and start the server
mongoose.connect("mongodb://localhost:27017/Packers", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
