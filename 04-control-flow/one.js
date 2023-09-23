//if 
//true is exacute that block and false is not exacute that if block

const userLogIn = true;
const temperature = 41;

// if( temperature === 40 ) {
//  console.log("is not greater than 50");
// } else {
//     console.log("is greater than 50");
// }
// console.log('excute');

// <, >, <=, =<, ==, !=, ===, !==

// const score = 200;
// if (score > 100) {
//     const power = "fly";
//    console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2"); //not do like this

// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedFromGoogle = false;
const loggedFromEmail = true;

// && both condition check and both condition true
if (userLoggedIn && debitCard && 2==3) { 
    console.log("Allow to buy course");
}

// || check one value is true from both

if (loggedFromGoogle || loggedFromEmail) {
    console.log("user logged in");
}