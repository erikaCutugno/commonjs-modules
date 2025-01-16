const fullName = require("./names.js");
const hobbies = require("./hobbies.js");


function people(){
    const user= {
        fullName: fullName("Erika","Cutugno"),
        hobbies: hobbies("danza","pattinaggio","nuoto")
    }
    return user
}

console.log(people())
