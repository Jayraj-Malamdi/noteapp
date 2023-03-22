// this is the model we will use to create, update & delete everything
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;