var express = require('express')
var router = express.Router()
var UserController = require('../controllers/users.controller');
var MailController = require('../controllers/mail.controller');
var Authorization = require('../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */

router.post('/registration', UserController.createUser)
router.post('/login', UserController.loginUser)
router.get('/', Authorization, UserController.getUser)
router.put('/update', Authorization, UserController.updateUser)
router.delete('/:id', Authorization, UserController.removeUser)
router.post('/sendMail',MailController.sendEmail)



// Export the Router
module.exports = router;



