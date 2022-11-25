var express = require('express')
var router = express.Router()
var NotificationController = require('../controllers/notification.controller');
var Authorization = require('../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions


router.post('/registration', NotificationController.createNotification)
router.get('/',Authorization, NotificationController.getNotifications)
router.get('/byUser',Authorization, NotificationController.getNotificationsbyUser)
router.put('/modify', Authorization, NotificationController.updateNotification)
router.delete('/:id', Authorization, NotificationController.removeNotification)






// Export the Router
module.exports = router;



