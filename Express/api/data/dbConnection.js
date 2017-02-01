var MongoClient = require('mongodb').MongoClient
var dburl = 'mongodb://localhost:3000/hotels';

var _connection = null;

var open = function() {
    MongoClient.connect(dburl, function(err, db){
        if (err) {
            console.log("Databse connection failed");
            return;
        } else {
            _connection = db;  
            console.log("Successfully connected to MongoDB.");                    
        }

    });
};

var get = function() {
    return _connection;
}

module.exports = {
    open : open,
    get : get
}