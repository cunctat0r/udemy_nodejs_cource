var square = (x) => {
  var result = x * x; 
  return result;
};

console.log(square(3));

var sq1 = x => x * x;

console.log(sq1(3));

var user = {
  name: 'Slava',
  sayHi: () => {
    console.log(`Hi, ${this.name}`);
  },
  sayHiAlt () {
    console.log(`Hi, ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt();
