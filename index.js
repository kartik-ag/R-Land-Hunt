const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/admin', (req, res) => {
    res.render('admin');
});
app.get('/identity', (req, res) => {
    res.render('Identity');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/register', (req, res) => {
    res.render('register');
});
app.get('/createhunt', (req, res) => {
    res.render('admin-hunt-creator');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
