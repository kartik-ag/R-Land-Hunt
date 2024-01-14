const express = require('express');
const cors = require('cors');
// const axios = require('axios');
const csrf = require('csurf');
const router = express.Router();

const addCsrfTokenMiddleware = require('../middlewares/csrf-token');
const { json } = require('body-parser');

router.use(cors());

router.use(csrf());

router.use(addCsrfTokenMiddleware);

const redirectUrl = "http://localhost:3000/callback";
const clientId = "TgzqtF7oa0cZSY6TAndwEyGty7DCaYMhFfBk7szn";
const client_secret = "2HDL3JcHx7EyTU8zemx0Wm7nIpSnFN0NfYtETKgUHI9WYZ2hBaJ5PqKUgAjUHoOIVHWyXj8w6LqFadpsqoS0z1kfOkEv3NwLuCg7F1tI6MKFiQHGyBxfvrgmBY4JQwmq";
const state = "random_string";
const redirect_uri = "http://localhost:3000/identity";


function getAccessToken(req, res, code) {
    const newLink = `http://channeli.in/open_auth/token/?client_id=${clientId}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&grant_type=authorization_code&code=${code}`;
    res.redirect(newLink);
}


router.get('/auth', (req, res) => {
    const authorizationUrl = `http://internet.channeli.in/oauth/authorise?client_id=${clientId}&redirect_uri=${redirectUrl}`;

    res.redirect(authorizationUrl);

});


router.get('/callback', async (req, res) => {

    if (req.query) {
        const authorizationCode = req.query.code;

        const csrfToken = req.csrfToken();
        console.log("csrf " + csrfToken);
        console.log("code " + authorizationCode);

        getAccessToken(req, res, authorizationCode);


    }
    else {
        console.log("error in auth route");
    }
});







module.exports = router;