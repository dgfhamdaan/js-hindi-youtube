// Array

const myArr = [0,1,2,3,4,5]; // start from 0
const herors = ['batman', 'ironman']

const myArr2 = new Array (1,2,3,4,5);
console.log(myArr[2]);

//Array method

// myArr.push(6)
// myArr.push(7) // add
// myArr.pop() // remove

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9)); // false 
// console.log(myArr.includes(9)); // -1 

// const newArr = myArr.join() // convert to string and separate
// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);






