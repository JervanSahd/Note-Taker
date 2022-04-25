const {readFromFile, readAndAppend} = require('./helpers/util'); 
const uuid = require('./helpers/uuid');

const notes = require('express').Router();

  // GET Route for retrieving all the notes
app.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new notes

app.post('/', (req, res) => {
  console.info(`${req.method} request received to add a notes`);

  const { title, text } = req.body;

  if (titel && text) {
    const newNote= {
      title,
      text,
      tip_id: uuid(),
    };

readAndAppend(newNote, '.db.db.json');
res.json('Note added successfully');
  }
  else{
    res.error('Error in adding note')
  }

  }
);
module.exports = notes;