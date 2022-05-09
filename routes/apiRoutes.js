const apiRoute = require('express').Router;
const { readFromFile, readAndAppend } = require ('../helpers/fsUtils')
const uuid = require ('../helpers/uuid')
const routeNotes = require('../db/db');


// GET /api/notes should read the db.json file and return all saved notes as JSON.
apiRoute.get('/', (req, res) => {
  routeApi.getNotes().then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});


// // POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client. 

apiRoute.post('/', (req, res) => {
  routeNotes
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

module.exports = apiRoute;
