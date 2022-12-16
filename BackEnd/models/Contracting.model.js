var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ContractingSchema = new mongoose.Schema({
    
    idClass: String,
    idStudent: String,
    status: String,
    createdDate: Date,
    phone: Number,
    email: String,
    from: String,
    to: String,
    motivo: String

});



ContractingSchema.plugin(mongoosePaginate)
const Contracting = mongoose.model('Contracting', ContractingSchema)


module.exports = Contracting;