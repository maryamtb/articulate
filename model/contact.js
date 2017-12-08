var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var Contact = Schema.Contact;

var ContactSchema = new Schema({
    owner   : String
  , title   : String
  , description    : String
});
module.exports = mongoose.model('Contact', ContactSchema);