const myArr = [0, 1, 2, 3, 4, 5]  
const myHeros = ["IronMan", "CaptainAmerica"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr2[0]);

// Array Methods

myArr2.push(6)    //  push: add the element in the last of the array
myArr2.push(7)
myArr2.pop()      // pop: remove the last element of the array

myArr2.unshift(9)  // add the element from the first of the array
myArr2.shift()     // remove the element from the first of the array

// console.log(myArr2);

// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(3));

const newArr = myArr2.join()
// console.log(newArr);
// console.log(myArr2);


// slice, splice

//console.log("A", myArr2);

const myn1 = myArr2.slice(1, 3)
// console.log(myn1);
// console.log("B", myArr2);

const myn2 = myArr2.splice(1, 3)
// console.log("C", myArr2);
// console.log(myn2);



const marvel_heros = ["Ironman", "CaptainAmerica", "Thor"]
const dc_heros = ["Superman", "flash", "batman"]


const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const allHero = [...marvel_heros, ...dc_heros]   // spread operator (...)
//console.log(allHero);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 8,[4, 5]]]
const real = another_array.flat(Infinity)
console.log(real);



console.log(Array.isArray("Prashant"));  // asking prashant array hai ki nhi
console.log(Array.from("Prashant"));
console.log(Array.from({name: "Prashant"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

