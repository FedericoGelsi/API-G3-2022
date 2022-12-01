// Gettign the Newly created Mongoose Model we just created 
var Contracting = require('../models/Contracting.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the Contractings List
exports.getContractings = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Contractings = await Contracting.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Contractings;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Contracting');
    }
}

exports.createContracting = async function (contracting) {
    // Creating a new Mongoose Object by using the new keyword
    

    var newContracting = new Contracting({
        
        idClass: contracting.idClass,
        idStudent: contracting.idStudent,
        status: contracting.status,
        createdDate: new Date()
    })
    
    

    try {
        // Saving the Class 
        var savedContracting = await newContracting.save();
        var token = jwt.sign({
            id: savedContracting._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Contracting")
    }
}

exports.updateContracting = async function (contracting) {
    
    var id = {_id :contracting._id}

    try {
        //Find the old User Object by the Id for Contracting
        var oldContracting = await Contracting.findOne(id);
    } catch (e) {
        throw Error("Error occured while Finding the Contracting")
    }
    // If no old User Object exists return false
    if (!oldContracting) {
        return false;
        
    }
    //Edit the Class Object
    
    
    oldContracting.status = contracting.status
    
    try {
        var savedContracting = await oldContracting.save()
        return savedContracting;
    } catch (e) {
        throw Error("And Error occured while updating the Contracting");
    }
}



