// Gettign the Newly created Mongoose Model we just created 
var Student = require('../models/Student.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the student List
exports.getStudents = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Students = await Student.paginate(query, options)
        // Return the studentd list that was retured by the mongoose promise
        return Students;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating students');
    }
}

exports.createStudent = async function (student) {
    // Creating a new Mongoose Object by using the new keyword
    var hashedPassword = bcrypt.hashSync(student.password, 8);
    
    var newStudent = new Student({
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        date: new Date(),
        password: hashedPassword,
        phone: student.phone,
        birthDate: student.birthDate,
        studies: student.studies
    })

    try {
        // Saving the Student 
        var savedStudent = await newStudent.save();
        var token = jwt.sign({
            id: savedStudent._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Student")
    }
}

exports.updateStudent = async function (student) {
    
    var id = {name :student.name}

    try {
        //Find the old student Object by the Id
        var oldStudent = await Student.findOne(id);
    } catch (e) {
        throw Error("Error occured while Finding the student")
    }
    // If no old student Object exists return false
    if (!oldStudent) {
        return false;
    }
    //Edit the student Object
    var hashedPassword = bcrypt.hashSync(student.password, 8);
    oldStudent.firstName = student.firstName
    oldStudent.lastName = student.lastName
    oldStudent.email = student.email
    oldStudent.password = hashedPassword
    oldStudent.phone = student.phone
    oldStudent.birthDate = student.birthDate
    oldStudent.studies = student.studies
    try {
        var savedStudent = await oldStudent.save()
        return savedStudent;
    } catch (e) {
        throw Error("And Error occured while updating the student");
    }
}

exports.deleteStudent = async function (id) {

    // Delete the student
    try {
        var deleted = await Student.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("student Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the student")
    }
}


exports.loginStudent = async function (student) {

    // Creating a new Mongoose Object by using the new keyword
    try {
        // Find the student 
        console.log("login:",student)
        var _details = await Student.findOne({
            email: student.email
        });
        var passwordIsValid = bcrypt.compareSync(student.password, _details.password);
        if (!passwordIsValid) return 0;

        var token = jwt.sign({
            id: _details._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return {token:token, student:_details};
    } catch (e) {
        // return a Error message describing the reason     
        throw Error("Error while Login Student")
    }

}