var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ArticlesSchema = new Schema({
    name: String,
    author: String,
    url: String,
    name: {
        type: String, 
        required: true},
    author: {
        type: String, 
        required: true},
    url: {
        type: String, 
        required: true},
    });

module.exports = mongoose.model('Articles', ArticlesSchema);


