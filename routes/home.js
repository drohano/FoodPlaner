var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home');

    router.get('/', homeController.Index);
    //router.get('/login', homeController.Login);
    //router.get('/register', homeController.Register);

module.exports = router;