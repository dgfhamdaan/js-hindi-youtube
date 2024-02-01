class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){  //static it stop to access any thing
        return `1234`
    }
}

const userData = new User("sam");
// console.log(userData.createId());


class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email
    }

}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());
