console.log('Starting notes.js');

const fs = require('fs');

const getNotes = (fname) => {
  try {
    var notesString = fs.readFileSync(fname);
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

const saveNotes = (fname, notes) => {
    fs.writeFileSync(fname, JSON.stringify(notes));
};

const showNote = (note, okMessage, errMessage) => {
  if (note) {
    console.log(okMessage);
    console.log('------------');
    console.log('Title:', note.title);
    console.log('Body:', note.body);
  } else {
    console.log(errMessage);
  }
};

var addNote = (title, body) => {
  var notes = getNotes('notes-data.json');

  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length == 0) {
    notes.push(note);
    saveNotes('notes-data.json', notes)
    return note;
  }
};

var getAll = () => {
  return getNotes('notes-data.json');
};

var getNote = (title) => {
  var notes = getNotes('notes-data.json'); 
  var filtered = notes.filter((note) => note.title === title);
  if (filtered.length > 0) {
    return filtered[0];
  }
};

var removeNote = (title) => {
  var notes = getNotes('notes-data.json');
  var filtered = notes.filter((note) => note.title !== title);
  if (filtered.length > 0) {
    saveNotes('notes-data.json', filtered);
  }
  return notes.length !== filtered.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  showNote
};
