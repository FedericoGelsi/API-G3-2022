var express = require('express')
var router = express.Router()
var ClassController = require('../controllers/class.controller');
var Authorization = require('../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions


router.post('/registration', ClassController.createUser)
router.get('/',Authorization, ClassController.getUsers)
router.put('/', Authorization, ClassController.updateUser)
router.delete('/:id', Authorization, ClassController.removeUser)




// Export the Router
module.exports = router;



