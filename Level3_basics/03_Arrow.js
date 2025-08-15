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


function chai(){
    console.log(this);
    
}

chai()