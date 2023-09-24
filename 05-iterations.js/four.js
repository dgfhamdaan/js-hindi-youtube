const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    python: 'py'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'cpp', 'java', 'swift']
for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('In', "India")
// map.set('Usa', "United state of America")
// map.set('Fr', "france")
// map.set('In', "India") // because it is not iterable

// for (const key in map) {
//   console.log(key);
// }

