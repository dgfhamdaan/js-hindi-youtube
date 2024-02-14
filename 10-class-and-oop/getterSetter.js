class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    
    get email(){
        return`${this._email.toUpperCase()}//http`;
    }

    set email(value){
     this._email = value
    }


    get password(){  // get is use to get value
        return `${this._password}hamdaan`;
    }

    set password(value){  // set use to set the value
        this._password = value;
    }
}

const dgf = new User("dgf@Sample.ai", "abcd");
console.log(dgf.email);