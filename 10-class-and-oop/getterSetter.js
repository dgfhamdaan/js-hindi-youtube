class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    
    get email(){
        d
    }

    get password(){  // get is use to get value
        return `${this._password}hamdaan`;
    }

    set password(value){  // set use to set the value
        this._password = value;
    }
}

const dgf = new User("dgf@gmail.com", "abcd");
console.log(dgf.password);