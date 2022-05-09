const html = require('express').Router;
const { readFromFile, readAndAppend } = require ('../helpers/fsUtils')
const uuid = require ('../helpers/uuid')
const path = require('path');

// GET /notes should return the notes.html file.
html.get('/', (req, res) => {
  res.readFromFile(path.join(__dirname, '../public/notes.html'));
});

// GET * should return the index.html file.
html.get('*', (req, res) => {
  res.readFromFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
