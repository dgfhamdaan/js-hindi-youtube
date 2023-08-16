/*
// primitive

// 7 types => String, Number, Booleans, Null, Undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outTemp = null;
let userEmail;

const Id = Symbol('123');
const anotherId = Symbol('123');

console.log(Id === anotherId);

const bigNumber = 34568685757575675798798696n

console.log(bigNumber);


// Reference (non primitive)

// array, objects, functions 

const DC = ["batman", "superman", "wonderwomen"];
let myObj = {
    name: 'hamdaan',
    age: 18
}

const myFunction = function() {
    console.log('hello world');
}

console.log(typeof score);

// note console.log(typeof)
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function object => object
       Object  =>  object
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), heap (Non-primitive)

let myYoutubename = 'dgfhm'
let anothername = myYoutubename;
anothername = 'dgfdev'

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: 'user@gmail.com',
    upi: 'user@bl'
}

let userTwo = userOne;

userTwo.email = 'usertwo@gmail.com'

console.log(userOne.email);
console.log(userTwo.email);

