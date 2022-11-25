var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var NotificationSchema = new mongoose.Schema({
    
    text:String,
    idCommet: String,
    idUser: String,
    status: String,
    createdDate: Date

});



NotificationSchema.plugin(mongoosePaginate)
const Notification = mongoose.model('Notification', NotificationSchema)


module.exports = Notification;