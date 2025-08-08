// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // object

// let myCreateDate = new Date(2023, 0,20)
//  console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2023, 0 ,20, 6, 7)
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023") // MM DD YY
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000)); // convert in seconds

// Airbnb me Date booking clone

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

// `${newDate.getDay()} and the time`   

// If you customize date more
newDate.toLocaleString('default', {    // defining object as parameters
    weekday: "long",                    // On click "ctrl + space" to gives all properties 
    
})

