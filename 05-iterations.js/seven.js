const myNumber = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumber.map( (num) => {return num + 10});

const newNums = myNumber
                .map( (num) => num * 10) // first this include
                .map( (num) => num + 1) // second this include
                .filter((num) => num >= 40 ) // filter only true value

console.log(newNums);