// let myName = "Shivam     ";
// let mychannel = "chai    "

// // console.log(myName.length);
// console.log(myName.truelength);

let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shivam = function(){
    console.log(`shivam is present in all objects`);
}

Array.prototype.helloShivam = function(){
    console.log(`Shivam say Hello`);
}
// heroPower.shivam()
// myHero.shivam()

// myHero.helloShivam()

// heroPower.helloShivam() // helloshivam power ka access heropower ke pass nhi he


// inheritance
const User = {
    name:"chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User

// modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher) // tearcher ki property access karo -> TeachingSupp.


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"iceTea".trueLength()