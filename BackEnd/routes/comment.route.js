var express = require('express')
var router = express.Router()
var CommentController = require('../controllers/comment.controller');
var Authorization = require('../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions

router.post('/creation', CommentController.createUser)
router.get('/',Authorization, CommentController.getUsers)
router.put('/', Authorization, CommentController.updateUser)
router.delete('/:id', Authorization, CommentController.removeUser)



// Export the Router
module.exports = router;



