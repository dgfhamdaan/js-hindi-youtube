//ES6

class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abcd`
    }

    chaangeUserName(){
        return `${this.username.toUpperCase()}`;
    }
}

const data = new user("gojo", "gojo@gmail.com", "123432433");

console.log(data.encryptPassword());
console.log(data.chaangeUserName());

//behind the scence

function user1(username,email,password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

user1.prototype.encryptPassword = function () {
    return `${this.password}abcd`
}

user1.prototype.chaangeUserName = function () {
    return `${this.username.toUpperCase()}`;
}

const data2 = new user1("naruto", "naruto@gmail.com", "12343");

console.log(data2.encryptPassword());
console.log(data2.chaangeUserName());