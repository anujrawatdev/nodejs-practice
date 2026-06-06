const fs = require("fs");


//Blocking...
console.log("1");

const result = fs.readFileSync("contact.txt","utf-8");
console.log(result);

console.log("2");



//non-Blocking...

console.log("1");

const result = fs.readFile("contact.txt","utf-8",(err,result)=>{
    console.log(result);
});


console.log("2");
console.log("3");