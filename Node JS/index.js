const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     if(req.url == "/product"){
//         fs.readFile('./product.html', (err, data) => {
//             if(err){
//                 res.writeHead(404);
//                 res.write("Error: File not found");
//             }
//             else{
//                 res.write(data);
//             }
//             res.end();
//         });
//     }
//     else if(req.url == "/user"){
//         fs.readFile('./user.html', (err, data) => {
//             if(err){
//                 res.writeHead(404);
//                 res.write("Error: File not found");
//             }
//             else{
//                 res.write(data);
//             }
//             res.end();
//         });
//     }
//     else{
//         fs.readFile('./index.html', (err, data) => { 
//             if(err){
//                 res.writeHead(404);
//                 res.write("Error: File not found");
//             }
//             else{
//                 res.write(data);
//             }
//             res.end();
//         });
//     }
// })

const server = http.createServer((req, res) => {
    const urldata = req.url.toString();
    console.log(urldata);
    if(urldata.length > 1){
    const data = fs.readFileSync('./index.html').toString();
    res.end(data);
    }
    else{
        res.end("error : 404");
    }
});

server.listen(3000, () => { 
    console.log("Server is running on port 3000");
});