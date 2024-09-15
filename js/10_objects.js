// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Prashant",
    "full name": "Prashant jaiswal",
    age: 20,
    location: "Prayagraj",
    email: "prashant@google.com",
    isloggedin: false,
    lastLoggindays: ["Monday", "Thursday"],
    [mySym]: "myKey1"         // this is ki symbol ko object ma aisa declare krta hai interview Q
}
// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "prashant@chatgpt.com"  // if you wanna change email then U use (.)
Object.freeze(JsUser)    // if you freeze then nobody can change ur email



// JsUser.greeting = function(){                                        // not clear
//     console.log("hello js user");
    
// }

// JsUser.greetingTwo = function(){                                
//     console.log(`hello js user, ${this.name}`);
    
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



// SINGLETON         literals ma use nhi hota
// object.create       its a constructor used in singleton

//const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "123abs"
tinderUser.name = "rohit"
tinderUser.isloggedin = false

//console.log(tinderUser);

const regularUser = {
    email: "prashant@google.com",
    fullname: {
        userfullname: {
            firstname: "Prashant",
            lastname: "jaiwal",
        }
    }
}
console.log(regularUser.fullname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {...obj1, ...obj2}
console.log(obj3);



const user = [                       // array ka andar object declare krna
    {
        email: "prashant@g.com",
    }
]


console.log(tinderUser);
console.log(Object.keys(tinderUser));        // imp
console.log(Object.values(tinderUser));      // imp
console.log(Object.entries(tinderUser));     // imp

console.log(tinderUser.hasOwnProperty('isloggedin'));  // imp


