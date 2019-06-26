module.exports = {
db: function(callback) {
var MongoClient = require('mongodb').MongoClient
    MongoClient.connect('mongodb+srv://a:<a>@cluster1-pyaia.mongodb.net/test?retryWrites=true&w=majority', callback)
  }
};