var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticlesSchema = new Schema({
    title: String,
    content: String,
    author: String,
    id: String,
});

module.exports = mongoose.model('Articles', ArticlesSchema);


