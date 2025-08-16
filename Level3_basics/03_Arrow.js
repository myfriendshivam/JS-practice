const { use } = require("react");

const user = {
    userName: "Prince",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
        
    }
    // this will refer current context
}

user.welcomeMessage()
use.userName = "sam"
user.welcomeMessage()

console.log(this); // refer to empty object


// function chai(){
//     let username = "Prince"
//     console.log(this.username); // not work in function only work in object.
// }
// chai()

// const chai = function chai(){
//     let username = "Prince"
//     console.log(this.username); // not work in function only work in object.
// }

const chai = () => {
    let username = "Prince"
    console.log(this.username); // arrow function
}

chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// const addTwo = (num1, num2) => num1+num2 // implicit return
// const addTwo = (num1, num2) => (num1+num2) // implicit return

const addTwo = (num1, num2) => ({username: "Prince"}) // object in implicit return

console.log(addTwo(3,4));

const myArr = [2,5,3,8,7]

myArr.forEach()