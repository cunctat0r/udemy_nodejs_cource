
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
      describe: 'Title of note',
      demand: true,
      alias: 't'
};

const bodyOptions = {
      describe: 'Body of note',
      demand: true,
      alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions 
  })
  .command('read', 'Read note with specified title', {
    title: titleOptions
  })
  .command('remove', 'Remove note with specified title', {
    title: titleOptions
  })
  .command('list', 'Show all notes')
  .help()
  .argv;
var command = argv._[0];

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
