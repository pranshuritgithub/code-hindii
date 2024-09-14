// ++++++++++++++++++++  NUMBERS  +++++++++++++++++
const score = 100
console.log(score);

const number = new Number(100)
console.log(number);

console.log(number.toString());
console.log(number.toString().length);
console.log(number.toFixed(2));

const otherNumber = 123.4587
console.log(otherNumber.toPrecision(4));

const hundred = 1000000
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString('en-IN'));


// ++++++++++++++++++++++  MATHS  ++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  // absolute value they convert -ve to +ve
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));   // its for top value
console.log(Math.floor(4.9));  // its for lower value
console.log(Math.min(4 , 8 , 9 ,2));
console.log(Math.max(4 , 8 , 9 ,2));

// +++++++++++++ IMPORTANT ++++++++++++++

console.log(Math.random());  // (random value) they are always givingf 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);







