

function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}

// sayMyName()
/*
function addTwoNumbers(number1, number2){ // parameters
    console.log(number1+number2);
} */

addTwoNumbers(3,4) // arguments
addTwoNumbers(3,null)
// const result = addTwoNumbers(4,5)
// console.log("Result: ", result);


function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    return number1+number2
}
const result = addTwoNumbers(4,5)
console.log("Result: ", result);


function loginUserMessage(username = "sam"){  // "sam" is default value
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("John"));


function calculateCartPrice(val1, val2, ...num1){  //rest parameter
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));



const user = {
    username: "John",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArr = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 400, 100, 600]));

