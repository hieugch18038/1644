//khai bao module http de tao web server
const http = require('http')
//khai bao local server
const host = 'localhost' //127.0.0.1
//khai bao server port
const port = 500
//tao server
const server = http.createServer((request, respond) => {respond.end('hello check 2 world')})
//chay server
server.listen(port, () => {
    console.log('Server is running at http://' + host + ":" + port)
})