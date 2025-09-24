//Object literal

const user = {
    username: "Shivam",
    loginCount: 8,
    singnedIn: true,

    getUserDetails: function(){
        console.log("Got User details from Database");
        console.log(`Username: ${this.username}`);
        console.log(this); // this keyword -> current context
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // this gives global object -> window
 
// Constructor function-
// const promiseOne = new Promise() // new keyword -> constructor function gives new instances(copy) then you change as yours
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
} 

const userOne = new User("Shivam", 10, true)
const userTwo = new User("ChaiAurCode ,11, false")
// console.log(userOne);
// console.log(userOne.greeting());
console.log(userOne.constructor); // itself reference

// 1) new keyword -> create empty object(instances)
// 2) construtor function call due to new keyword -> pack all argument then forward to user
// 3) all argument injected in this keyword
// 4) seen in the function

// operator -> instanceof