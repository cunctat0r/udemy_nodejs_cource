const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  if (res !== 44) {
    throw new Error(`Expected 44, got ${res}`);
  }
});

it ('should square number', () => {
  var res = utils.square(15);

  if (res !== 225) {
    throw new Error(`Expected 225, got ${res}`);
  }
});
