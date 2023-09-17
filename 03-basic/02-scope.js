// var c = 300
let a = 300 // outside value called globe scope

if(true){  // inside value {called block scope}
    let a = 10
    const b = 20 
    console.log('INNER: ', a); 
}

console.log(a);
// console.log(b);
// console.log(c);