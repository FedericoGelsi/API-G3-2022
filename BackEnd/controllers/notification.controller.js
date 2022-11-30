const { type } = require('os');
var NotificationService = require('../services/notification.service');

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getNotifications = async function (req, res) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Notifications = await NotificationService.getNotifications({}, page, limit)
        // Return the Notifications list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Notifications, message: "Succesfully Notification Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.getNotificationsbyUser = async function (req, res) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {idUser: req.params.idUser}
    try {
        var Notifications = await NotificationService.getNotifications(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Notifications, message: "Succesfully Notifications Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createNotification = async function (req, res) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)

        var Notification = {
            text: req.body.text,
            idComment: req.body.idComment,
            idUser: req.body.idUser,
            status: req.body.status

        }
        
    
    try {
        // Calling the Service function with the new object from the Request Body

       
            var createdNotification = await NotificationService.createNotification(Notification)
        
        
        return res.status(201).json({createdNotification, message: "Succesfully Created Notification"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Notification Creation was Unsuccesfull"})
    }
}

exports.updateNotification = async function (req, res) {

    // Id is necessary for the update
    if (!req.body.id) {
        return res.status(400).json({status: 400., message: "id be present"})
    }

    
    var Notification = {
       
        status: req.body.status ? req.body.status : null,
    }
    try {
        var updatedNotification = await NotificationService.updateNotification(Notification)
        return res.status(200).json({status: 200, data: updatedNotification, message: "Succesfully Updated Notification"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeNotification = async function (req, res) {

    var id = req.params.id;
    try {
        var deleted = await NotificationService.deleteNotification(id);
        res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

