const User = require('../models/user.model');

function getSignup(req, res) {
    res.render('register');
}

function signup(req, res) {
    // console.log(req.body);
    const user = new User(req.body.enrollementNo, req.body.password);
    user.signup().then(function () {
        res.redirect('/');
    }).catch(function (err) {
        console.log(err);
    });
}

function getLogin(req, res) {
    res.render('login');
}

module.exports = {
    getSignup: getSignup,
    getLogin: getLogin,
    signup: signup
};


