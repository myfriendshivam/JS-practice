// Immediately Invoked function Expressions(IIFE)

(function chai(){   // named IIFE
    console.log(`DB CONNECTED`);
})();
// global scope ke polution se problem hoti he kayivar to us scope ke variable ke polution ko htane keliye IIFE ka use kiya.

( (name) => {   // nan named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('prince')

// JavaScript Exicution Context