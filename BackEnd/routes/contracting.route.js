var express = require('express')
var router = express.Router()
var ContractingController = require('../controllers/contracting.controller');
var Authorization = require('../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions


router.post('/registration', ContractingController.createContracting)
router.get('/',Authorization, ContractingController.getContractings)
router.get('/byClass',Authorization, ContractingController.getContractingsByClass)
router.get('/byStudent',Authorization, ContractingController.getContractingsByStudent)
router.put('/modify', Authorization, ContractingController.updateContracting)






// Export the Router
module.exports = router;



