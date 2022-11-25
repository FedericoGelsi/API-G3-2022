var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ContratingSchema = new mongoose.Schema({
    
    idclass: String,
    idStudent: String,
    status: String,
    createdDate: Date

});



ContratingSchema.plugin(mongoosePaginate)
const Contrating = mongoose.model('Contrating', ContratingSchema)


module.exports = Contrating;