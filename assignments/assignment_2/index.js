// const request = require("supertest");
 
const fs= require('fs');
const http = require('http')

//  fs.writeFile('index.html','<h1>Hello World</h1>',(err)=>{
//     console.log('File is created')
// })

const server=http.createServer((req,res)=>{
    fs.readFile('./index.html',(err,data)=>{
        res.write(data)
        return res.end();   
    })
}).listen(3000)