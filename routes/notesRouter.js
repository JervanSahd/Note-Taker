const {readFromFile, readAndAppend} = require('../helpers/util'); 
// const uuid = require('./uuid');

const notes = require('express').Router();

  // GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new notes

notes.post('/', (req, res) => {
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

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Wildcard route to direct users to the home page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/index.html'))
);

module.exports = notes;