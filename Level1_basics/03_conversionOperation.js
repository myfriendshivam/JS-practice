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
