function saymyName(){

    console.log("P");
    console.log("r");
    console.log("a");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("t");
    
}
//saymyName()                    // saymyName is reference,  () is execution




function addTwoNumber (number1, number2)    // (number1, number2) its called parameter
{
    console.log(number1 + number2);
    
}
addTwoNumber(8,4)                    // (8,4) its called argument




function addTwoNumbers (number1, number2)  
{
    console.log(number1 + number2);                          
}
const result = addTwoNumbers(5, 6)            // variable ka andar store krna addTwoNumbers(5, 6)

//console.log("Result: ", result);              // if you print console.log("Result: ", result);  this is not work they give undefine





function addTwoNumberss(number1, number2)  
{
    let result1 = number1 + number2
    return result1                          // return ka baad koi bhi console.log print nhi hoga     
}   
const result1 = addTwoNumberss(5, 5)
console.log("Result1: ", result1); 




function loginUsername(username)
{
    return `${username} just logged in`
}
console.log(loginUsername("Prashant"));




function calculatecarPrice(num1)
{
    return num1
}
console.log(calculatecarPrice(2));

function calculatecarPrices(...num1)
{
    return num1
}
console.log(calculatecarPrices(2, 1545, 458));

function calculatecarPricess(val1, val2, ...num1)
{
    return num1
}
console.log(calculatecarPricess(2, 1545, 458, 600));



//   Object ka andar function banana

const user = {                 // ye hai object
    username: "prashant@",
    id: 456
}     

function any(some){
    console.log(`Username is ${some.username} and their id is ${some.id}`);
    
}
any(user)               // call the function


// Array ka andar function banana

const mynewarray = [100, 200, 300]

function of(kid){
    return kid[0]
}
console.log(of(mynewarray));
