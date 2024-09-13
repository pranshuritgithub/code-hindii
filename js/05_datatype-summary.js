// Javascript is a dynamic language

// Datatype has two parts:

// 1 Primitive
// 2 Non Primitive

// In Primitive they have seven datatypes:

// 1 String
// 2 Integer
// 3 Boolean
// 4 null
// 5 undefined
// 6 BigInt
// 7 Symbol

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
const bigNumber  = 464894864646461316n
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );



// IN Non Primitive (reference) has three datatype:

// 1 Array
// 2 Objects
// 3 Functions

const heros = ["shaktiman", "naagraj"];  //Array
let myobj = {
    name: "Prashant",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof heros);
