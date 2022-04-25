const express = require('express');
const path = require('path');
const api = require('./routes');

const PORT = process.env.port || 3001;
app.use(express.static('public'));
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
