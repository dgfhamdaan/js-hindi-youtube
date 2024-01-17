// let myName = "hamdaan     "
// let mychannel = "dgf     "

// console.log(myName.trueLength);

let myHerors = ["thor","spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "websuing",

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hamdaan = function(){
    console.log("hamdaan is present in all object");
}

Array.prototype.heyhamdaan = function(){
    console.log("hello to all");
}


// heroPower.hamdaan()
myHerors.hamdaan()
myHerors.heyhamdaan()
// heroPower.heyhamdaan()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

const AnotherUserName = "dgfhamdaan    ";

String.pro