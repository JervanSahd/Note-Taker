const express = require('express');

// Import our modular routers for /notes
const notesRouter = require('./notesRouter');


const app = express();
// localhost:3001/api/notes
app.use('/notes', notesRouter);



module.exports = app;
