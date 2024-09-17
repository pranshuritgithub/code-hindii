const user = {
    username: "Prashant",
    price: 4560,

    welcomeMessage: function() {
        console.log(`${this.price}, welcome to website`);    // (this) making a current context
        //console.log(this)                                  // (this) are ued in object only not in function
    }
}
// user.welcomeMessage()
// user.price= 897
// user.welcomeMessage()
//console.log(this)



function one(){                                // (this) not used in fun()
    let username = "Prashant"
    console.log(this.username);
    
}
//one()

const two = function(){
    let username = "Prashant"
    console.log(this.username);
    
}
//two()

const twoo = () => {                 // () => it is also called an arrow function
    let username = "Prashant"
    console.log(this.username);
    
}
//twoo()


// +++++++  Function return kiya

const Two = (num1, num2) => {           // if you use braces then you have to use return compulsry    , they are known as explicit return
    return num1 + num2
}
//console.log(Two(5, 9))

const three =(num1, num2) => (          // if you use use bracket  then no need of return          , they are known as implicit return
    num1 + num2
)
//console.log(three(7, 9));


// ++++ function ka andar Object return krna hai

const four =() => ( {         
    username : "Prashant"
})
console.log(four('username'));