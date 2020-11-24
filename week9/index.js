const express = require('express');
const bodyParser = require('body-parser');

/*express().listen('3000', () => {
    console.log('Server run successfully at port 3000');
})*/

const app = express()

app.use(bodyParser.json());
app.use(express.static('public'));

app.set('vie engine', 'pug');

// GET http://localhost:3000
app.get('/', (request, response) => {
    //response.send('Hello, World!');
    response.render('index', {title: 'Hello World', message: 'Hello there!'});
});

// GET http://localhost:3000/about
app.get('/about', (request, response) => {
    response.send('About Us!!');
});

// GET http://localhost:3000/test/500
app.get('/test/:id', (request, response) => {
    const data = request.params.id;
    response.send(`Request data = ${data}`);
});

// GET http://localhost:3000/test/news/500
app.get('/test/news/:id', (request, response) => {
    const id_news = request.params.id;
    response.send(`Request data = ${id_news}`);
});

//GET http://localhost:3000/login => menampilkan form login
app.get('/login', (request, response) => {
    response.send('Ketikkan username dan password.');
});

//POST http://localhost:3000/login => melakukan login, cek username dan password yang diketik user
app.post('/login', (request, response) => {
    const username = request.body.username;
    const password = request.body.password;
    response.send(`Request POST login : ${username} and ${password}`);
});

app.listen(3000);
console.log('Server run at port 3000');