/*console.log('Hello World!');

const a = 3;
const b = 4;
console.log(a+b);


const fs = require('fs');

fs.readFile('hello.txt', function (err,data) {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(data.toString());
    }
})

const callbackFunc = function (err,data) {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(data.toString());
    }
}

fs.readFile('hello.txt', callbackFunc) //asynchronous

const data = fs.readFileSync('hello.txt'); //synchronous
console.log(data.toString());*/

const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs');

const port = 3000;

const routes = {
    '/'     : 'views/index.html',
    '/about': 'views/about.html'
}

const app = http.createServer(function (request, response) {
    const url = request.url;
    console.log(`Incoming request to ${url}`);

    /*response.writeHead(httpStatus.OK, {'Content-Type': 'text/html'});

    response.write('<h1>Hello, Universe!</h1>');
    response.write('<p>This is a node server</p>');*/

    if(routes[url]) { //cek apakah url ada di dalam routes
        response.writeHead(httpStatus.OK, {'Content-Type' : 'text/html'});
        //baca isi html dari file
        fs.readFile(routes[url], (err, data) => {
            response.end(data);
        })
        /*response.end(routes[url]);*/
    } else {
        response.writeHead(httpStatus.NOT_FOUND, {'Content-Type' : 'text/plain'});
        response.end('Page not found.');
    }
});
app.listen(port);

console.log(`The server has been started on port ${port}`);

/* note
MEVN
MongoDB => database
Expres => library untuk server
Vue => frontend (angular, react, dll)
Node => runline */
