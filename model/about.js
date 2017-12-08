var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var About = Schema.About;

var AboutSchema = new Schema({
    owner   : About
  , title   : String
  , description    : String
});
module.exports = mongoose.model('About', AboutSchema);