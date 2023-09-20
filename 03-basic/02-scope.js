// var c = 300
let a = 300 // outside value called globe scope

if(true){  // inside value {called block scope}
    let a = 10
    const b = 20 
    // console.log('INNER: ', a); 
}

// console.log(a);
// console.log(b);
// console.log(c);




function one() {
    const username = 'hamdaan';
    
    function two() {
        const website = 'youtube';
        console.log(username);       
    }
        // console.log(website);
    //child variable access to parent variable
    two();

}

// one();

if(true) {
    const username = "hamdaan";
    if(username === "hamdaan") {
        const website = " youtube";
        // console.log(username + website);
    }

    // console.log(website); error is define
}

// console.log(username); error is define



/*************************interesting********************/

console.log(addone(5));
function addone(num) {
    return num + 1;
}

// addtwo(5); //hoisting 
const addtwo = function (num) {
    return num + 1;
}


