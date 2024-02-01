class User{
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username) // use like a call function
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`new course add by ${this.username}`);
    }
}

const NewTeacher1  = new Teacher("hinata","hinata@gmail.com","45435");

NewTeacher1.addCourse();

const NewTeacher2 = new User("sakura");

NewTeacher2.logMe();

console.log(NewTeacher1 instanceof User);