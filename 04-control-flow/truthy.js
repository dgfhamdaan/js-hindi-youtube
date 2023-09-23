const userEmail = [];

if (userEmail) {
    console.log("got user email");
} else{
    console.log("don't get user email");
}

// falsy value
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// "0", 'false', " ", [], {}, function(){}

//how to check is empty or not 
if (userEmail.length === 0) {
  console.log("Array is empty");   
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}

// Nullish coalescing operator (??): null, undefined

let val1;
//val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;


console.log(val1);

//terniary operator

// condition ? true:false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");