const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  
  expect(res).toBe(44).toBeA('number');
});

it ('should square number', () => {
  var res = utils.square(15);

  expect(res).toBe(225).toBeA('number');
});

it ('should set firstName and lastName', () => {
  var user = {age: 36};
  var fullName = 'Slava Petrov';

  expect(utils.setName(user, fullName))
    .toInclude({firstName: 'Slava'})
    .toInclude({lastName: 'Petrov'})
    .toBeA('object');
})
