const { type } = require('os');
var UserService = require('../services/user.service');

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getUser = async function (req, res) {

    // Req.Body contains the form submit values.
    console.log("body",req.body)
    var User = {
        _id: req.body.id,
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var getUser = await UserService.getUser(User);
        return res.status(200).json({getUser, message: "Succesfully getUser"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: "Invalid id for this user"})
    }

}


exports.createUser = async function (req, res) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)

        var UserStudent = {
            type: req.body.type,
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            birthDate: req.body.birthDate,
            education: req.body.education,

        }
       
        var UserProfessor = {
            type: req.body.type,
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            birthDate: req.body.birthDate,
            title:req.body.title,
            experience:req.body.experience
        }
        
    
    try {
        // Calling the Service function with the new object from the Request Body

        if(req.body.type==="student"){
            var createdUser = await UserService.createUser(UserStudent)
        }
        else{
            var createdUser = await UserService.createUser(UserProfessor)
        }
        
        return res.status(201).json({createdUser, message: "Succesfully Created User"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "User Creation was Unsuccesfull"})
    }
}

exports.updateUser = async function (req, res) {

    // Id is necessary for the update
    if (!req.body.name) {
        return res.status(400).json({status: 400., message: "Name be present"})
    }

    if(req.body.type) {
        var User = {
        
            name: req.body.name ? req.body.name : null,
            lastName: req.body.lastName ? req.body.lastName : null,
            email: req.body.email ? req.body.email : null,
            password: req.body.password ? req.body.password : null,
            phone: req.body.phone ? req.body.phone : null,
            birthDate: req.body.birthDate ? req.body.birthDate : null,
            education: req.body.education ? req.body.education : null
        }
    }
    
    else{
        var User = {
        
            name: req.body.name ? req.body.name : null,
            lastName: req.body.lastName ? req.body.lastName : null,
            email: req.body.email ? req.body.email : null,
            password: req.body.password ? req.body.password : null,
            phone: req.body.phone ? req.body.phone : null,
            birthDate: req.body.birthDate ? req.body.birthDate : null,
            title: req.body.title ? req.body.title : null,
            experience: req.body.experience ? req.body.experience : null
        }
    }
    try {
        var updatedUser = await UserService.updateUser(User)
        return res.status(200).json({status: 200, data: updatedUser, message: "Succesfully Updated User"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeUser = async function (req, res, next) {

    var id = req.params.id;
    try {
        var deleted = await UserService.deleteUser(id);
        res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}


exports.loginUser = async function (req, res) {
    // Req.Body contains the form submit values.
    console.log("body",req.body)
    var User = {
        email: req.body.email,
        password: req.body.password
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var loginUser = await UserService.loginUser(User);
        if (loginUser===0)
            return res.status(400).json({message: "Error en la contraseña"})
        else
            return res.status(201).json({loginUser, message: "Succesfully login"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: "Invalid username or password"})
    }
}
