// const tinderUser = Object(); singleton object

const tinderUser = {} //not singleton object

tinderUser.id = "123Abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: 'sam',
            lastName: 'jon'
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = { 1:"a", 2:"b" }
const obj2 = { 3:"a", 4:"b" }
const obj4 = { 5:"a", 6:"b" }

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2); // {} target and obj source

const obj3 = {...obj1, ...obj2} // use this is easy for marge in object // use in array also

// console.log(obj3);

const user = [  //database
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    
    {
        id: 1,
        email: "h@gmail.com"
    }  
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
