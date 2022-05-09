
const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helper/fsUtils');

// GET "/api/notes" responds with all notes from the database
notes.get("/notes", (req, res) => {
  // GET Route for retrieving all the notes
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


notes.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text} = req.body;

  if (req.body) {
    const newNote = {
    
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note were added`);
  } else {
    res.error('Error: No notes added');
  }
});
// 
// router.delete("/notes/:id", (req, res) => {
//   store
//     .removeNote(req.params.id)
//     .then(() => res.json({ ok: true }))
//     .catch((err) => res.status(500).json(err));
// });

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
notes.delete('/:id', (req, res) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all tips except the one with the ID provided in the URL
      const result = json.filter((note) => note.id !== noteId);

      // Save that array to the filesystem
      writeToFile('./db/db.json', result);

      // Respond to the DELETE request
      res.json(`Item ${tipId} has been deleted 🗑️`);
    });
});

module.exports = notes;
