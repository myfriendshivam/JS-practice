//Truthy and Falsy value

// const userEmail = "shivam@gmail.com"
// const userEmail = ""
const userEmail = []
if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user Email");
}

//falsy value
// false, 0, -0, BigInt -> 0n, "", null, undefined, NaN
// Truthy value
// "0", 'false', " ", [], {}, function(){} ->empty function

if(userEmail.length === 0){
    console.log("Array is empty");
}

const empyObj = {}

if(Object.keys(empyObj).length === 0){
    console.log("Object is empty");
}

if(false == 0 || false == '' || 0 == ''){ // true

}

// Nullish Coalescing Operator(??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 15 ?? 20

console.log(val1);

//Terniary Operator -> condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
