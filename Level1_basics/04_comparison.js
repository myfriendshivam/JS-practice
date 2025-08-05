console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false

// ===  -> strictly check(datatypes also check)

console.log("2" === 2); 

//-------------------------Memories------------------------

// Stack (primitive) -> copy of the variable , Heap(Non-primitive) -> referance of original object

let myYoutube = "ShivamKantDotCom"
let anotherName = myYoutube
anotherName = "ShivamParam"
console.log(myYoutube);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shivam@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);
