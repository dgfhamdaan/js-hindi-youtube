const name = "hamdaan"
const repoCount = 15

// console.log(name + repoCount + " value");

console.log(`Hello my name ${name} and my repo count is ${repoCount}`);

let gameName = new String('hamdaan-hc-com');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newOnestring = '  hamdaan   '
console.log(newOnestring);
console.log(newOnestring.trim());

const url = 'http://code.com//code%20dev.com'
console.log(url.replace('%20', '-'));

console.log(url.includes('code'));

console.log(gameName.split('-'));







