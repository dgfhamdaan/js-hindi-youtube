const user = { 
    username: "hamdaan",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to this website`); //this is current contact
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()

// console.log(this);
//this in chrome brower => window

// function chai() {
//     let username = "hamdaan"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//       let username = "hamdaan"
//     console.log(this.username);  
// }

// const chai = () => { //arrow function
//       let username = "hamdaan"
//     console.log(this);  
// }

// chai()

// const addtwo = (num1,num2) => {
//     return num1 + num2  // inverse funvtion
// } 

// const addtwo = (num1,num2) =>  num1 + num2
//implict function one line code

// const addtwo = (num1,num2) =>  (num1 + num2)
// () = return 

const addtwo = (num1,num2) =>  ({username: "hamdaan"})
// ({}) = object

console.log(addtwo(3,4));