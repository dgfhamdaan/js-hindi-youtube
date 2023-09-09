// sinngleton
//Object.create
// object excess for . or [] 

const mySym = Symbol("key1")

 const userJs = {
    name: "hamdaan",
    "full name": "hamdaan shaikh",
    [mySym]: "mykey1",
    age: 18,
    location: "mumbai",
    email: "90b0@gmail.com",
    isLoggedIn: false,
    lastLoggedInDay: ["Monday", "sunday"]
 }

 console.log(userJs.email);
 console.log(userJs["email"]);
 console.log(userJs["full name"]);
 console.log(userJs["full name"]);
 console.log(userJs[mySym]);

 userJs.email = "80Ae@gmail.com"
//  Object.freeze(userJs); // not changing in object freeze
 userJs.email = "80Ae@chat.com"
//  console.log(userJs);

userJs.greeting = function(){
    console.log("hello JsUser");
}

userJs.greetingTwo = function(){
    console.log(`hello JsUser, ${this.name}`);
}


console.log(userJs.greeting());
console.log(userJs.greetingTwo());

