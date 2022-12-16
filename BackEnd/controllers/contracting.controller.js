const { type } = require('os');
var ContractingService = require('../services/contracting.service');
// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getContractings = async function (req, res) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Contractings = await ContractingService.getContractings({}, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Contractings, message: "Succesfully Contractings Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getContractingsByStudent = async function (req, res) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    console.log(req.params);
    let filtro= {idStudent: req.body.studentId}
    try {
        var Contracting = await ContractingService.getContractings(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Contracting, message: "Succesfully Contracting Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getContractingsByClass = async function (req, res) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {idClass: req.body.classId}
    try {
        var Contracting = await ContractingService.getContractings(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Contracting, message: "Succesfully Contracting Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createContracting = async function (req, res) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)

        var Contracting = {
            idClass: req.body.idClass,
            idStudent: req.body.idStudent,
            status: req.body.status,
            phone: req.body.phone,
            email: req.body.email,
            from: req.body.from,
            to: req.body.to,
            motivo: req.body.motivo

        }
    
    try {
        // Calling the Service function with the new object from the Request Body

        var createdContracting = await ContractingService.createContracting(Contracting)
        
        
        return res.status(201).json({createdContracting, message: "Succesfully Created Contract"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Contract Creation was Unsuccesfull"})
    }
}

exports.updateContracting = async function (req, res, next) {

    // Id is necessary for the update
    if (!req.body.id) {
        return res.status(400).json({status: 400., message: "id be present"})
    }

    
    var Contracting = {
       
        status: req.body.status ? req.body.status : null
    }
    try {
        var updatedContracting = await ContractingService.updateContracting(Contracting)
        return res.status(200).json({status: 200, data: updatedContracting, message: "Succesfully Updated Contract"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

