// var c = 300  // global scope
let a = 300
if(true){ // block scope
    let a = 10
    const b = 20
    // var c = 30
    console.log("INNER: ", a);
}


console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username = "John"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error
    
    //two()
}
// one()

if(true){
    const username = "John"
    if(username === 'John'){
        const website = "youtube"
        console.log(username+website);
    }
    // console.log(website); // error
}
// console.log(username);  // errror

// ---------------interesting----------

addone(5)
function addone(num){
    return num+1
}


// addTwo(5)  // error
const addTwo = function(num){
    return num+2
}
