// Load env variables
if (process.env.NODE_ENV != "production") {      // WE USE IF-ELSE, BECAUSE when we deploy it, then that service may have their ways to load variables, so we want this for locally only. 
    require("dotenv").config();
  }

// Import dependencies
const express = require('express')
const cors = require("cors");
const connectToDb = require("./config/connectToDb");
// const Note = require('./models/note');
const notesController = require("./controllers/notesController");

// Create an express app
const app = express();

// Configure express app
app.use(express.json()); // by default express cannot read json
app.use(cors());

// Connect to database
connectToDb();

// Routing
    // Example
    // app.get('/', (req, res) => {        // so anytime '/' path is clicked, the function is run
    //     res.json({hello: 'world'})
    // });
app.get("/notes", notesController.fetchNotes);
app.get("/notes/:id", notesController.fetchNote);
app.post("/notes", notesController.createNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);

// Start our server
app.listen(process.env.PORT);
