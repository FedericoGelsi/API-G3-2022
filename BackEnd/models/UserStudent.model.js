var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var UserStudentSchema = new mongoose.Schema({
    
    type: String,
    name: String,
    lastName: String,
    email: String,
    password: String,
    phone: Number,
    birthDate: Date,
    education: String,
    createdDate: Date

});


UserStudentSchema.plugin(mongoosePaginate)
const UserStudent = mongoose.model('UserStudent', UserStudentSchema)

module.exports = UserStudent;
