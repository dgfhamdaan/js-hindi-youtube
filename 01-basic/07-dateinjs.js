// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDates = new Date(2023, 0, 20);
// let myCreatedDates = new Date(2023, 0, 20, 10, 46);
// let myCreatedDates = new Date("2023-01-08");
let myCreatedDates = new Date("01-20-2023");
// console.log(myCreatedDates.toLocaleString());

let myTimeStamp = Date.now()


console.log(myTimeStamp);
console.log(myCreatedDates.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getMonth} and time`

newDate.toLocaleString('default', {
    weekday: 'long'
})









