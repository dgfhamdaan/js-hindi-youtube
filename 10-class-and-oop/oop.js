const user = {   // obhject literal
    username: "hamdaan",
    loginCount: 8,
    isLoginIn: true,

    getUserDetail: function(){
        // console.log("got user deatil from database");

        // console.log(`username:${this.username}`);  
        //this: use to get current context of my username

        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);

function User(username, loginCount, isLoginIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoginIn = isLoginIn;

    this.greeting = function(){
        console.log(`welcome ${username}`);
    }
    
    return this
}

const userOne = new User("hamdaan", 12, true)
const usertwo = new User("dgf", 12, true)
console.log(userOne.constructor);
// console.log(usertwo);

// new: to get new instance