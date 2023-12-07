// 1. import http from 'http';
const http = require('http');

// 2. create a server object:
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write("Hello World "); //write a response to the client
    if(req.url == "/product"){
         return res.end("Product page");
    }
    else if(req.url == "/user"){
        return res.end("User page");
    }
    else{
        return res.end("Home page");
    }
    //res.end("Welcome to Nong's server"); //end the response
});

// 3. listen for requests
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

//console.log("Server is running on port 3000")