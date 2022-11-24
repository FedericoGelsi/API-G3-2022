var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    date: Date,
    phone: String,
    birthDate: Date,
    studies: String,


})

StudentSchema.plugin(mongoosePaginate)
const Student = mongoose.model('Student', StudentSchema)

module.exports = Student;