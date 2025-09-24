// call, bind, apply



function SetUsername(username){
    //complex DB calls
    this.username = username   // this keyword pass th createUser me
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    
    this.email = email
    this.password = password
}

// this your current execution context pass to another function

const chai = new createUser("chai", "chai@gmail.com", "123")
console.log(chai);
