const Note = require("../models/note");

const fetchNotes = async (req, res) => {
    // find the notes
    const notes = await Note.find();
    // respond with them
    // res.json({ notes: notes});   if key and value are same we can write the below code. both works same
    res.json({ notes });
};


const fetchNote = async (req, res) => {
    // get id off the url
    const noteId = req.params.id;

    // find the note using that id
    const note = await Note.findById(noteId);

    // respond with the note
    res.json({note});
};

const createNote =  async (req, res) => {
    // Get the sent in data off request body
    // const title = req.body.title;     // this are the columns title used in note.js
    // const body = req.body.body;
    const {title, body } = req.body;   // above two codes can be written in this manner also.

    // Create a note with it
    const note = await Note.create({     // since we used await, hence above function is async in post
        // title: title,
        // body: body,
        title,
        body,
    });

    // respond with the new note
    res.json({note});

};

const updateNote =   async (req, res) => {
    // get the id off the url
    const noteId = req.params.id;

    // get the data off the req body
    // const title = req.body.title;
    // const body = req.body.body;
    const { title, body } = req.body;

    // find and update the record
        // this code will give old value in postman.
    await Note.findByIdAndUpdate(noteId, {
        title,
        body,
    });

    // find updated note
    const note = await Note.findById(noteId);

    // respond with it
    // res.json({note: note});
    res.json({note});
};

const deleteNote =  async (req, res) => {
// // //     // get id off the url
//       const noteId = req.params.id;

// // //     // delete the record
// // // //    await Note.deleteMany({id: noteId});
//     await Note.findOneAndDelete({ id: noteId });

// // //     // respond
//      res.json({success: "record deleted"});
// // console.log(req.params.id);

// //let id_del=req.params.id;
// //Note.findByIdAndDelete(id_del);

// const User = require('./models/user'); // Import the User model

// User.deleteOne({ _id: '12345' }, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('User deleted successfully!');
//   }
// });

};

module.exports = {
    fetchNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote,
};
