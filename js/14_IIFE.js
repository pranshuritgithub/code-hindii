// Immediately Invoked Function Expressions (IIFE)


(function one() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( () => {
    // without named IIFE ,   its called arrow function
    console.log(`DB CONNECTED TWO`);
    
})();

( (name) => {
    // without named IIFE ,   its called arrow function
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Prashant')


// NOTE: agrr dooo dooo iife function ko ek sath run krna hai too use (;)