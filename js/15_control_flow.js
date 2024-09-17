
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if(score>150)
{
    let power = "fly"
    console.log(`User power :${power}`);
}
// console.log(`User power :${power}`);          // bcoz ya execute nhi hoga




const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");

if (balance < 500)
{
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 850){
    console.log("less than 850");
}
else{
    console.log("less than 1200");
    
}



const userLoggedIn = true
const debitcard = true

if(userLoggedIn &&  debitcard && 2==2)
{
    console.log("allow to buy course");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromGoogle ||  loggedInFromEmail)
{
    console.log("user logged in");
    
}



// ++++++++++++++++ Switch Case ++++++++++++++++
// a common syntax of switch case

// switch (key) {
//     case value:

//     break:

//     default:
//         break:
// }

const month = 3     // integer

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
        

    default:
        console.log("default case match");
     break;
}
// agr ek bhi case match hoo gya too uska baad bhi ya sara code execute krta hai except (default case). (default case) isko execute nhi krta


const months = "march"          // string

switch (months) {
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("February")
        break;
    case "march":
        console.log("March")
        break;
    case "april":
        console.log("April")
        break;

    default:
        console.log("default case match");
     break;
}




const userEmail = "prashant@.ai"

if(userEmail)
{
    console.log("got email");
}
else{
    console.log("not got email");
}



// ++++++++++++++   NOTE   ++++++++++

// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value

// "0", "false", " ", [], {}, function(){}    // jo bhi value string ,ai hai sb true value hai




// array krna hai too

const userEmails = "prashant@.aii"

if(userEmails.length === 0)
{
    console.log("Array is empty");
    
}

// Object krna hoo too

const empttyObject = {}

if(Object.keys(empttyObject).length === 0)
{
    console.log("Object is empty");
    
}




// Nullish Coalescing Operator (??):  null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15

console.log(val1);
 




// ++++++++++++ Terniary Operator +++++++++++

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 50 ? console.log("less than 50") : console.log("more than 50");

