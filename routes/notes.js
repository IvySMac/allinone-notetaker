const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the feedback
notes.get('/', (req, res) =>
  readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
// POST Route for a new UX/UI tip
notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newTip = {
        title,
        text,
        id: uuid(),
      };
  
      readAndAppend(newTip, 'db/db.json');
      res.json(`Note successfully added!✨`);
    } else {
      res.error('Error in adding note');
    }
  });

module.exports = notes;