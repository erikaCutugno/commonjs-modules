const fullName = require("./names.js");
const hobbies = require("./hobbies.js");


function people(){
    const person = fullName("Erika","Cutugno")
    return {
        fullName: `${person.firstName} ${person.lastName}`,
        hobbies: hobbies("danza","pattinaggio","nuoto")
    }
    
}

console.log(people())
