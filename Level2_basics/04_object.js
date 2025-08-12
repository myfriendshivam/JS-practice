// const tinderUser = new Object() // this is singleton
const tinderUser = {}  // non singleton

tinderUser.id = "123abc"
tinderUser.nme = "John"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser  = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shivam",
            lastname: "Kant"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj5 = {5:"e", 6:"f"}

// const obj3 = {obj1, obj2}
console.log(obj3);
// const obj4 = Object.assign({}, obj1, obj2, obj5)

const obj4 = {...obj1, ...obj2}
console.log(obj4);


const users = [
    {
        id:1,
        email:"S@gmail.com"
    },
    {
    },
    {
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // its data type is array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// loop through time check the final value
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
