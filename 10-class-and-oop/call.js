function setUserName(username){
  //complex DB call
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const chai  =  new createUser("hamdaan","sample@1233","56756")
console.log(chai);