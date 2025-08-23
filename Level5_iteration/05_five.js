
const myNumbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNumbers.map( (num) => num+10)
// console.log(newNums);


// chaining
// const newNums = myNumbers
//                         .map( (num) => num*10)
//                         .map( (num) => num+1)
//                         .filter( (num) => num >= 40)
// console.log(newNums);


//reduce

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);


myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);

const shoppingcart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
]

const priceToPay = shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
