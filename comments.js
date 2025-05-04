// Create web server
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const comments = [];

// Endpoint to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Endpoint to add a new comment
app.post('/comments', (req, res) => {
  const { name, comment } = req.body;
  const newComment = { name, comment };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});