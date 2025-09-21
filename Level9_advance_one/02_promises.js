
const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
}).catch((error)=> {
    console.log(error);
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "shivam", email: "shivam123@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
}).catch((error)=> {
    console.log(error);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true  // false
        if(!error){
            resolve({username: "shivam", password: "123"})
        } else{
            reject('Error: Somthing went worng')
        }
    }, 1000)
})
// avoid callback hell
promiseFour.then((user)=> {
    console.log(user);
    return user.username
}).then((username)=> {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
     setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "javaScript", password: "123"})
        } else{
            reject('Error: JS went worng')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch(' https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error){
//         console.log("E: ",error);
//     }
// }

//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=> {
    console.log(data);
})
.catch((error)=> console.log(error))