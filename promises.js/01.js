const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
      // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()                              // resolve ko call krnana
    }, 1000)
})

promiseOne.then(function(){                  // resolve ko connect krna (then) lgaa krr
    console.log("Promise consumed");
})

// +++++++++++++++++++++++++++ OR +++++++++++++++++++++++++++++++

new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log('Async task 2');
        resolve()                             
    }, 1000)

}).then(function(){                  
    console.log("Promise 2 consumed");
})


// +++++++++++++++++++++++++++++++++++++++++++++++

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async 3 is completed');
        resolve({username: "code", email: "code@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
 })


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true             // mtlb error hai hmare pass
        if(!error)                   // agrr error nhi hai
        {
            resolve({username: "prashant", password: "215"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);

}).catch((error) => {                           // (catch) reject ka liya use hota hai
    console.log(error);
    
})



