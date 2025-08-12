// singleton - is created by using constructor
// if lateral declared krna singleton nhi hota he
// Object.create  => constuctor method

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shivam",
    "Full Name": "Shivam Kant",
    age:18,
    [mySym]: "mykey1",   // symbol
    location: "Kanpur",
    email: "shivamkant345@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full Name"]);
console.log(JsUser[mySym]);

JsUser.email = "shivam3648@gmail.com"
// Object.freeze(JsUser)  // freez the object means values not changes
JsUser.email = "shivam876@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello, JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
