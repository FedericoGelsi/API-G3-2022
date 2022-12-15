const { type } = require('os');
var ClassService = require('../services/class.service');

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getClasses = async function (req, res) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Classes = await ClassService.getClasses({}, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Classes, message: "Succesfully Classes Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.getClassesByName = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {name: req.body.name}
    try {
        var Classes = await ClassService.getClasses(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Classes, message: "Succesfully Classes Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.getClassesByid = async function (req, res,) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {_id: req.body.id}
    try {
        var Classes = await ClassService.getClasses(filtro, page, limit)
        console.log(Classes);
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Classes, message: "Succesfully Classes Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.getClassesByProfessor = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {idProfessor: req.body.professor}
    try {
        var Classes = await ClassService.getClasses(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Classes, message: "Succesfully Classes Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getClassesByDuration = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {duration: req.body.duration}
    try {
        var Classes = await ClassService.getClasses(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Classes, message: "Succesfully Classes Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.getClassesByFrecuency = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {frecuency: req.body.frecuency}
    try {
        var Classes = await ClassService.getClasses(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Classes, message: "Succesfully Classes Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createClass = async function (req, res) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)

        var Class = {
            
            name: req.body.name,
            subject: req.body.subject,
            description: req.body.description,
            duration: req.body.duration,
            frequency: req.body.frequency,
            currency: req.body.currency,
            type: req.body.type,
            cost: req.body.cost,
            rating: req.body.rating,
            idProfessor: req.body.idProfessor
            
        }
       
    
    try {
        // Calling the Service function with the new object from the Request Body
        
        var createdClass = await ClassService.createClass(Class)
        
        return res.status(201).json({createdClass, message: "Succesfully Created Class"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Class Creation was Unsuccesfull"})
    }
}

exports.updateClass = async function (req, res) {

    // Id is necessary for the update
    if (!req.body.name) {
        return res.status(400).json({status: 400., message: "Name be present"})
    }

    
    var Class = {
       
        name: req.body.name ? req.body.name: null,
        subject: req.body.subject ? req.body.subject: null,
        description: req.body.description ? req.body.description: null,
        duration: req.body.duration? req.body.duration: null,
        frequency: req.body.frequency? req.body.frequency: null,
        currency: req.body.currency? req.body.currency: null,
        type: req.body.type? req.body.type: null,
        cost: req.body.cost? req.body.cost: null,
        rating: req.body.rating? req.body.rating: null
    }
    try {
        var updatedClass = await ClassService.updateClass(Class)
        return res.status(200).json({status: 200, data: updatedClass, message: "Succesfully Updated User"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeClass = async function (req, res, ) {

    var id = req.params.id;
    try {
        var deleted = await ClassService.deleteClass(id);
        res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}



    
