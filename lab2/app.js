//1.khai bao module http de chay web server
const http = require ("http");
//var http = require ("http")

//2. khai bao host name (optional)
const host = "localhost";

//3. khai bao server port (co the chon cong bat ky)
const port = 3000;

//4. tao web server
const web = http.createServer((request, response) => {response.end("this is a tutorial about NodeJS")});

//5. chay server tren port (listen port)
web.listen(port, () => {
    console.log("Server is running at address: http://" + host + ":" + port)
    //console.log("http://localhost:" + port) phai ghi la http de hieu la mo web
});