const express = require('express');

// Import our modular routers for /notes
const notesRouter = require('./notesRouter');


const app = express();
// localhost:3001/api/notes
app.use('/notes', notesRouter);


// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Wildcard route to direct users to the home page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/index.html'))
);


module.exports = app;
