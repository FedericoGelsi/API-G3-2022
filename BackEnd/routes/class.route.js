var express = require('express')
var router = express.Router()
var ClassController = require('../controllers/class.controller');
var Authorization = require('../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions


router.post('/registration', ClassController.createClass)
router.get('/',Authorization, ClassController.getClasses)
router.post('/byProfessor',Authorization, ClassController.getClassesByProfessor)
router.post('/byName',Authorization, ClassController.getClassesByName)
router.post('/byId',Authorization, ClassController.getClassesByid)
router.post('/byDuration',Authorization, ClassController.getClassesByDuration)
router.post('/byFrecuency',Authorization, ClassController.getClassesByFrecuency)
router.put('/modify', Authorization, ClassController.updateClass)
router.delete('/:id', Authorization, ClassController.removeClass)



// Export the Router
module.exports = router;



