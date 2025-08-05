let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN



// "33" => 33
// "33abc" => NaN / type => number
// true =>1/ false => 0
// null => 0
// undefined => NaN
// boolean => 1

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// "" => false
// "shivam" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);

// ----------------------  Operations -----------------------------

let value = 3
let negValue = -value
// console.log(negValue);

// Not used in production
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "Shivam Kant"
let str2 = " Good morning"
let str3 = str1+str2
console.log(str3);

console.log("1" + 2); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log( (3 + 4) * 5 % 3);


console.log(+true);
console.log(+"");

let num1, num2, num3
num1=num2=num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
