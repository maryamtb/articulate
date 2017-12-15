module.exports = {
db: function(callback) {
var MongoClient = require('mongodb').MongoClient
    MongoClient.connect('mongodb://maryamscloud9-thekey-5727196:27017/articles', callback)
  }
};