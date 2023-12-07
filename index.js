const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const authRoutes = require('./routes/auth.routes');
const app = express();
const db = require('./data/database');
const huntinfoController = require('./controllers/huntinfo.controller');
app.use(authRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));


// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/admin', (req, res) => {
    res.render('admin');
});
app.get('/identity', (req, res) => {
    res.render('Identity');
});


app.get('/createhunt', (req, res) => {
    res.render('admin-hunt-creator');
});
app.get('/huntinfo', (req, res) => {
    res.render('huntinfo');
});

app.get('/hunt', (req, res) => {
    res.render('hunt');
});

app.post('/savehunt', bodyParser.urlencoded(), huntinfoController.storeData);

app.get('/upcomings',(req,res)=>{
    res.render('upcomings');
});

app.get('/bstart',(req,res)=>{
    res.render('beforestart1');
});

app.get('/teamregister',(req,res)=>{
    res.render('teamregister');
});

db.connectToDatabase().then(function (){
    app.listen(3000, () => {
        console.log('App listening on port 3000!');
    });
})
.catch(function (err) {
    console.log("Error connecting to database"+err);
});