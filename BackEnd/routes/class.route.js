var express = require('express')
var router = express.Router()
var ClassController = require('../controllers/class.controller');
var Authorization = require('../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions


router.post('/registration', ClassController.createClass)
router.get('/',Authorization, ClassController.getClasses)
router.get('/byProfessor',Authorization, ClassController.getClassesByProfessor)
router.get('/byname',Authorization, ClassController.getClassesByName)
router.get('/byId',Authorization, ClassController.getClassesByid)
router.get('/byDuration',Authorization, ClassController.getClassesByDuration)
router.get('/byFrecuency',Authorization, ClassController.getClassesByFrecuency)
router.put('/modify', Authorization, ClassController.updateClass)
router.delete('/:id', Authorization, ClassController.removeClass)



// Export the Router
module.exports = router;



