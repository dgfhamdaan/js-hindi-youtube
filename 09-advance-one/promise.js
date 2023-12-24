const promiseOne = new Promise(function (revolve,reject) {
      //Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("asyc task complete"); //first this execute
        revolve();
    },1000)
})

promiseOne.then(function(){  // second this will execute after that
    console.log("promise consumed");
})

new Promise(function(revolve,reject){
    setTimeout(function(){
        console.log("asysc task 2 complete");
        revolve();
    },1000)
}).then(function () {
    console.log("asysc consumed");
});

const promiseThree = new Promise(function (revolve,reject) {
    setTimeout(function () {
        revolve({username: "dgf", email: "jobs@example.com"})
    },1000)
})

promiseThree.then(function(user){ // get data by parameter
   console.log(user);
})

const promiseFour = new Promise(function(revolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            revolve({username:"hamdaan",email:"server@exm.com"});
        }else{
            reject("ERROR: something went wrong");
        }
    },1000)
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(()=>{console.log("promise either revolve or reject");})



const promiseFive = new Promise(function(revolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            revolve({username:"javascript",password:"1234"});
        }else{
            reject("ERROR: JS went wrong");
        }
    },1000)
})

async function consumedFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumedFive();

// async function getAllUser(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json() //await means it take time
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUser()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
 console.log(error);
})


