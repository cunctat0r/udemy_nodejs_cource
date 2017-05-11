console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('Slava'));

var filteredArray = _.uniq(['Slava', 1, 'Slava', 1, 2, 3, 4]);
console.log(filteredArray);

var res = notes.addNote();
console.log(res);

var sum = notes.add(9, -2);
console.log('Result:', sum);

//var user = os.userInfo();

//fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.\n`);


