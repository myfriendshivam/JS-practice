// Advance Object

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// const mynewObject = Object.create(null)

const Chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nhi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(Chai, "name"));
Object.defineProperty(Chai, 'name', {
    // writable: false,
    enumerable: true // false
});

// Object iteration property disable -> search

console.log(Object.getOwnPropertyDescriptor(Chai, "name"));

for (let [key, value] of Object.entries(Chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
    
}