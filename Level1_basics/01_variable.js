const accountId = 15674
let accountEmail = "shivamkant234@gmail.com"
var accountPassword = "12357"
accountCity = "Jaipur"

// accountId = 7 // not allowed

accountEmail = "hello123@gmail.com"
accountPassword = "45684"
accountCity = "Chani"
let accountState;
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])