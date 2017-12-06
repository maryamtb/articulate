var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ClassesSchema = new Schema({
    firstName: String,
    lastName: String,
    age: String,
    name: {type: String, required: true},
    password: String
    });
module.exports = mongoose.model('Classes', ClassesSchema);
