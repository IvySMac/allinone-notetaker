// Import Express.js
const express = require('express');
// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');
const api = require('./routes/index.js');

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/api', api);

// Static middleware pointing to the public folder


// Create Express.js routes for default '/', '/send' and '/routes' endpoints
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
);


// app.get('/api/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, 'db/db.json'))
// );



// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

