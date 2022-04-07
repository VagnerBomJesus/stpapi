let express = require('express');
let router = express.Router();
const Auth = require('../middleware/auth')



//import userController Controller

var userController = require('../controllers/userController');

//userController Routes

router.route('/users')
    .post(userController.signup)

router.route('/users/login')
    .post(userController.login)

router.route('/users/logout')
    .post(userController.logout)

router.route('/users/logoutAll')
    .post(userController.logoutAll)

module.exports = router;