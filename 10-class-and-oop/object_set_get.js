const User = {
    _email: "sm@ai",
    _password: "123",

    get email (){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const user = Object.create(User);
console.log(user.email);