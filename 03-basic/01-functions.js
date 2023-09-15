function myName() {
    console.log("h");
    console.log("a");
    console.log("m");
    console.log("d");
    console.log("a");
    console.log("a");
    console.log("n");
}

// myName();

// function addNUmber(number1, number2) {
//     console.log(number1 + number2);
// }

function addNUmber(number1, number2) {
    
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addNUmber(3,5);

// return = we can store value in other variable like const result = addNUmber(3,5);

//return without declare variable  like  return number1 + number2;

// if return is execude than after next line of code is not work it stop

// console.log("result: ",result);

 function loginUserMessage(username = "sam") {
    if(!username){ // username === undifined and !username is same 
        console.log("plese enter name");
        return;
    }
    return `${username} jus logged in`
}

// console.log(loginUserMessage("hamdaan"));
console.log(loginUserMessage("hitesh"));