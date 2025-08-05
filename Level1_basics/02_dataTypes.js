"use strict"; // treat all JS code as never version

// alert(3+3)  // we are using nodeJS, not browser

console.log(3
    + 3);  // code readability should be high
console.log("Shivam");

// documentation -> mdn  , tc39

let name = "shivam"
let age = 23
let isLoggedIn = false

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined 
// symbol => unique

// object

console.log(typeof "shivam");

// null => object
// undefined => undefined

//------------------- data types Summary ----------------------
// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// symbol def
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345678345553496n

// JS is a statically or dynamically typed language?

// Non primitive or referance type
// Array, Objects, Functions

const heros  = ["shaktiman", "naagraj", "doga"]

let Obj = {name: "Shivam", age: 17}

const myfunction = function(){
    console.log("Hello word!");
}

console.log(typeof anotherId);
