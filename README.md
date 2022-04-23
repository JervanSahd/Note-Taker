# Express.js: Note Taker

## Description

Create an application called Note Taker that can be used to write and save notes. Uses an Express.js back end and saves and retrieves note data from a JSON file deployed to Heroku.

```
Small business owners can write and save notes organize their thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria - Note-taking application

```
*   Open the Note Taker presented with a landing page with a link to a notes page

*   Click on the link to the notes page and presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

*   Enter a new note title and the note’s text a Save icon appears in the navigation at the top of the page

*   Click on the Save icon a new note entered is saved and appears in the left-hand column with the other existing notes

*   Click on an existing note in the list in the left-hand column that note appears in the right-hand column

*   Click on the Write icon in the navigation at the top of the page and presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Included

The back end, the application includes a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes are  created:
---
* `GET /notes` returns the `notes.html` file.

* `GET *`  returns the `index.html` file.


The following API routes should be created:
---

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


## Review

BOTH of the following to review:

* The URL of the functional, deployed application.
https://jervansahd.github.io/Note-Taker/
* The URL of the GitHub repository, with a unique name and a README describing the project.
https://github.com/JervanSahd/Note-Taker.git
- - -
