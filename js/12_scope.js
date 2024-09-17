let a = 300            // global scope

if(true) {             // jab if ka andar {} aata hai tab ussa scope kahta hai
    let a = 30
    const b= 40           
    //console.log("INNER:",a);        // block scope
    
}
//console.log(a);



function one() {                           // Nested
    const username = "Prashant"

    function two () {
        const password = 45678
        // console.log(username);
        // console.log(password);
        
    }
    two()
}
one()



if(true) {
    const username = "Prashant"
    if(username === "Prashant"){
        const website = "Jaiswal dry fruits"
        
        
        
    }
}



// +++++++++++++++++++++++ Interesting ++++++++++++++++++++

console.log(one(9))            // if we call here then there is give ans
function one(num){
    return num +2
}
//one(9)                       // if we call here then there is no ans


//console.log(Two(8))           // if we call here then there is no ans
const Two = function(num){
    return num+3
}
//Two(7)                       // if we call here then there is no ans