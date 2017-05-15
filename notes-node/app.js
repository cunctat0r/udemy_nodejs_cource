console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Process:', process.argv);
console.log('Yargs:', argv);


if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  notes.showNote(note, 'Note added.', 'Not added. Please select another title.');
} else if (command === 'list') {
  var myNotes = notes.getAll();
  if (myNotes.length > 0) {
    myNotes.forEach((note) => notes.showNote(note, '', ''));
    console.log('------------');
  } else {
    console.log('There are no notes');
  }
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  notes.showNote(note, 'Note read.', 'Note not found.')
} else if (command === 'remove') {
  var removed = notes.removeNote(argv.title);
  var message = removed ? 'Note was removed' : 'Note was not removed';
  console.log(message);
} else {
  console.log('Command not recognized.');
}
