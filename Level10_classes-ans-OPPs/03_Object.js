
// ## This code run in console-

// const newHero = ["hulk", spiderman]
// newHero
// prototype

// jacaScript ka default prototype behavior he -> prototypeal behavior

// array & string & function -> object -> null

function multiplyBY5(num){
    return num*5
}

multiplyBY5.power = 2
console.log(multiplyBY5(5));
console.log(multiplyBY5.power);
console.log(multiplyBY5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score

}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);   // this means jesne bulaya asko dekhao
    
}

const chai = new createUser("chai", 25)
const tea = createUser("ctea", 250)

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/