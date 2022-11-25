// Gettign the Newly created Mongoose Model we just created 
var Notification = require('../models/Notification.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the User List
exports.getNotifications = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Notifications = await Notification.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Notifications;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Contracting');
    }
}

exports.createNotification = async function (notification) {
    // Creating a new Mongoose Object by using the new keyword
    

    var newNotification = new Notification({
        
        text:notification.text,
        idCommet: notification.idCommet,
        idUser: notification.idUser,
        status: notification.status,
        createdDate: new Date()
    })
    
    

    try {
        // Saving the Notification 
        var savedNotification = await newNotification.save();
        var token = jwt.sign({
            id: savedNotification._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Notification")
    }
}

exports.updateNotification = async function (notification) {
    
    var id = {_id :notification._id}

    try {
        //Find the old User Object by the Id for Notification
        var oldNotification = await Notification.findOne(id);
    } catch (e) {
        throw Error("Error occured while Finding the Notification")
    }
    // If no old User Object exists return false
    if (!oldNotification) {
        return false;
        
    }
    //Edit the Class Object
    
    
    oldNotification.status = notification.status
    
    try {
        var savedNotification = await oldNotification.save()
        return savedNotification;
    } catch (e) {
        throw Error("And Error occured while updating the notification");
    }
}

exports.deleteNotification = async function (id) {

    // Delete the notification
    try {
        var deleted = await Notification.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("Notification Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the notification")
    }
}


