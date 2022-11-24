var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var UserProfessorSchema = new mongoose.Schema({
    
    type: String,
    name: String,
    lastName: String,
    email: String,
    password: String,
    phone: Number,
    birthDate: Date,
    title: String,
    experience: String,
    createdDate: Date

});



UserProfessorSchema.plugin(mongoosePaginate)
const UserProfessor = mongoose.model('UserProfessor', UserProfessorSchema)


module.exports = UserProfessor;