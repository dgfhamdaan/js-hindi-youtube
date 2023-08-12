const accountId = 123456;
let accountEmail = 'deep@gamil.com';
var accountPassword = '123456566';
accountcity = 'delhi';
let accountState;

//accountId = 12 // not to allow
console.log(accountId);

accountEmail = 'hchc@gamil.com'
accountPassword = '4454544'
accountcity = 'mumbai'

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountcity,accountState]);

