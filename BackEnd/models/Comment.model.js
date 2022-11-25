var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var CommentSchema = new mongoose.Schema({
    
    text:String,
    score: String,
    idClass: String,
    idUser: String,
    status: String,
    createdDate: Date

});



CommentSchema.plugin(mongoosePaginate)
const Comment = mongoose.model('Comment', CommentSchema)


module.exports = Comment;