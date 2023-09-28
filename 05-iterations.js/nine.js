const myNum = [1,2,3]

// const myTotal = myNum.reduce( function (acc,currval) {
//     console.log(`ac: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce( (acc,curr) => acc + curr, 0);

console.log(myTotal);

const shoppingcart = [
    {
        item: "js course",
        price: 3999,
    },
    {
        item: "py course",
        price: 899,
    },
    {
        item: "swift course",
        price: 9999,
    },
    {
        item: "C++ course",
        price: 2999,
    },
];

const totalToPay = shoppingcart.reduce( (acc,item) => acc + item.price ,0);
console.log(totalToPay);