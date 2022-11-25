var express = require('express')
var router = express.Router()
var ContractingController = require('../controllers/contracting.controller');
var Authorization = require('../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions


router.post('/registration', ContractingController.createUser)
router.get('/',Authorization, ContractingController.getUsers)
router.put('/', Authorization, ContractingController.updateUser)
router.delete('/:id', Authorization, ContractingController.removeUser)






// Export the Router
module.exports = router;



