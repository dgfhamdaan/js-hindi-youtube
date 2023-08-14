let score = "hamdaan"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => Number
// "33abc" => NaN
// Null => 0
// true => 1; false => 0


let isLogIn = "hamdaan"

let booleanIsLog = Boolean(isLogIn)
console.log(booleanIsLog);

// true => 1; false => 0
// "" => false
// "hamdaan" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


/**********************Operation*************************/

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); // 2 power 2
console.log(2/2);
console.log(2%2); // modular => remainder

let str1 = 'hello'
let str2 = ' hamdaan'

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3+4) * 5 % 4);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// study about conversion
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


