const name = "Hello"
const repoCount = 50
//console.log(name + repoCount + "value"); its an old version

console.log(`Hello my name is $(name) and my repo count is $(repoCount)`); // its a new version

const gameName = new String ("Prashant")

console.log(gameName[0]);         // you can do in a browser you have to be inspect firstly
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(-1,6)
console.log(anotherString);

const newStringOne = "  Prashant  "      // trim they remove side spaces in Prashant
console.log(newStringOne)                // learn trim from MDN
console.log(newStringOne.trim());       // trim they are work for whitespaces and line terminators


const url = "https://Prashant.com/Prashant%20jaiswal"

console.log(url.replace('%20', '-'));    //  search,replace

console.log(url.includes('Prashant'));
                    