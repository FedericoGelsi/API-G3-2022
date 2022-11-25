var express = require('express')
var router = express.Router()
var CommentController = require('../controllers/comment.controller');
var Authorization = require('../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions

router.post('/creation', CommentController.createComment)
router.get('/',Authorization, CommentController.getComments)
router.get('/byUser',Authorization, CommentController.getCommentsbyUser)
router.put('/modify', Authorization, CommentController.updateComment)
router.delete('/:id', Authorization, CommentController.removeComment)



// Export the Router
module.exports = router;



