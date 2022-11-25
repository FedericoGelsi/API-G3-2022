// Gettign the Newly created Mongoose Model we just created 
var Class = require('../models/Class.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the User List
exports.getClasses = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Classes = await Class.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Classes;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Classes');
    }
}

exports.createClass = async function (clase) {
    // Creating a new Mongoose Object by using the new keyword
    

    var newClass = new Class({
        
        name: clase.name,
        subject: clase.subject,
        description: clase.description,
        duration: clase.duration,
        frequency: clase.frequency,
        cost: clase.cost,
        rating:clase.rating,
        idProfessor:clase.idProfessor,
        createdDate: new Date()
    })
    
    

    try {
        // Saving the Class 
        var savedClass = await newClass.save();
        var token = jwt.sign({
            id: savedClass._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Class")
    }
}

exports.updateClass = async function (clase) {
    
    var id = {name :clase.name}

    try {
        //Find the old User Object by the Id for Student
        var oldClass = await Class.findOne(id);
    } catch (e) {
        throw Error("Error occured while Finding the Class")
    }
    // If no old User Object exists return false
    if (!oldClass) {
        return false;
        
    }
    //Edit the Class Object
    
    oldClass.name = clase.name
    oldClass.subject= clase.subject
    oldClass.description = clase.description
    oldClass.duration= clase.duration
    oldClass.frequency= clase.frequency
    oldClass.cost= clase.cost
    oldClass.rating= clase.rating
    
    try {
        var savedClass = await oldClass.save()
        return savedClass;
    } catch (e) {
        throw Error("And Error occured while updating the Class");
    }
}

exports.deleteClass = async function (id) {

    // Delete the Class
    try {
        var deleted = await Class.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("Class Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Class")
    }
}

