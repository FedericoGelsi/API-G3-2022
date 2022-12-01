const { type } = require('os');
var CommentService = require('../services/comment.service');

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getComments = async function (req, res) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Comments = await CommentService.getComments({}, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Comments, message: "Succesfully Comments Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.getCommentsbyUser = async function (req, res) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {idUser: req.body.idUser}
    try {
        var Comments = await CommentService.getComments(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Comments, message: "Succesfully Comments Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createComment = async function (req, res) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)

        var Comment = {
            text: req.body.text,
            score: req.body.score,
            idClass: req.body.idClass,
            idUser: req.body.idUser,
            status: req.body.status

        }
        
    
    try {
        // Calling the Service function with the new object from the Request Body

       
            var createdComent = await CommentService.createComment(Comment)
        
        
        return res.status(201).json({createdComent, message: "Succesfully Created Comment"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Comment Creation was Unsuccesfull"})
    }
}

exports.updateComment = async function (req, res) {

    // Id is necessary for the update
    if (!req.body.id) {
        return res.status(400).json({status: 400., message: "id be present"})
    }

    
    var Comment = {
       
        status: req.body.status ? req.body.status : null,
    }
    try {
        var updatedComment = await CommentService.updateComment(Comment)
        return res.status(200).json({status: 200, data: updatedComment, message: "Succesfully Updated Comment"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeComment = async function (req, res) {

    var id = req.params.id;
    try {
        var deleted = await CommentService.deleteComment(id);
        res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

