const fs = require("fs"); 
const http = require('http')
const port = 5000;

const fileContent = '<h1>Hello World</h1> <p1>This is Govind</p1>'

fs.writeFile("index.html" , fileContent , ()=>{console.log("new file is writeen")});

const server = http.createServer((req , res)=>{
    res.end
    (fs.readFileSync("index.html" , {encoding : "utf-8"}))
    return res.end()
})

server.listen(port , ()=>{console.log("server is fire at 5000 port ")})


