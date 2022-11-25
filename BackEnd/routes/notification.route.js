var express = require('express')
var router = express.Router()
var NotificationController = require('../controllers/notification.controller');
var Authorization = require('../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions


router.post('/registration', NotificationController.createUser)
router.get('/',Authorization, NotificationController.getUsers)
router.put('/', Authorization, NotificationController.updateUser)
router.delete('/:id', Authorization, NotificationController.removeUser)






// Export the Router
module.exports = router;



