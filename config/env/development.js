module.exports = {
  db: function(callback) {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://' + this.db_uri, callback);
  },

  db_uri: 'mongodb://maryamscloud9-thekey-5727196:27017/articles'
};