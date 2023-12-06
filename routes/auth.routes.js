const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const bodyParser = require('body-parser');
router.get('/signup', authController.getSignup);

router.get('/login', authController.getLogin);

router.post('/signup', bodyParser.urlencoded(), authController.signup);
module.exports = router;