const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('public/notes(.html)?');

const app = express();

app.use('public/notes(.html)?', notesRouter);


module.exports = app;