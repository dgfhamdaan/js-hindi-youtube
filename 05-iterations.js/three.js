// for of loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "hello world";
for (const greet of greeting) {
    // console.log(`each a char ${greet}`);
}

// Map

const map = new Map()
map.set('In', "India")
map.set('Usa', "United state of America")
map.set('Fr', "france")
map.set('In', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: "gta5",
    game2: "spiderman"
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}