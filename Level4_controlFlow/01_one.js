//IF
const isUserloggedIn = true
if(isUserloggedIn){

}

/* <, >, <=, >=, ==, !=, ===, !==, 
 2<=2
 3!=2
*/

if(2=="2"){
    console.log("executed");
}

const temperature = 41
if(temperature === 40){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");

const score = 200
if(score > 100){
    let power = "fly" // not use var
    console.log(`User powe:${power}`);
}
// console.log(`User powe:${power}`);

// short hand notation -> implicit scope
const balance = 1000
if(balance > 500) console.log("test");

// if(balance > 500) console.log("test"),console.log("test2"); -> never used this for production

//nesting
if(balance < 500){
    console.log("less than");
} else if(balance< 750){
    console.log("less than 750");
} else if(balance < 900){
    console.log("less than 750");
} else {
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged in");
}