const fs = require("fs");

// // Sync...
fs.writeFileSync("./test.txt" , "hello world"); 

// //Async...
fs.writeFile("./test.txt","hello bhai" ,(err)=>{});

//sync.. return something or can store in a variable
const result = fs.readFileSync("./contact.txt","utf-8");
console.log(result);

// //Async do not return anything 
fs.readFile("./contact.txt","utf-8",(err,result)=>{

    if(err){
        console.log("error",err);
    } else {
        console.log(result);
    }
})


// Append File
fs.appendFileSync("./heyThere.txt", `${Date.now()}hey there\n`);

//copy file
fs.cpSync("./heyThere.txt","./copy.txt");

//delete file
fs.unlinkSync("./copy.txt");

//stats about file
console.log(fs.statSync("./test.txt"));


// Create Directory
fs.mkdirSync("my-docs/a/b",{recursive:true});