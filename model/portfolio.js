var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticlesSchema = new Schema({
    name: String,
    author: String,
    url: String,
});

module.exports = mongoose.model('Articles', ArticlesSchema);


