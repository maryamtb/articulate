var config = require('./config'), 
    mongoose = require('mongoose'); 
mongoose.connect(config.db_uri, {
    useMongoClient: true 
});
