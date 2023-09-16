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
    return `${username} just logged in`
}

// console.log(loginUserMessage("hamdaan"));
// console.log(loginUserMessage("hitesh"));

function calculateCartPrice (val1, val2, ...num) { //rest 
    return num;
}
// ... is called rest or separate
// console.log(calculateCartPrice(100,200,400,299));

const user = {
    name: "hamdaan",
    price: "499"

}

function handleobject (anyobect) {
    console.log(`user name is ${anyobect.name} user price is ${anyobect.price}`);
}

// handleobject(user)

handleobject({
    name: "sam",
    price: "399"
})

const newArray = [100,200,300,400];

function returnSecondValue(anyarray) {
    return anyarray[2]
}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([100,300,500,600])); //this code both method is same

