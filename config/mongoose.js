//require library
const mongoose = require('mongoose');
//connect to the database
mongoose.connect('mongodb://localhost/codeial_development', { useNewUrlParser: true, useCreateIndex: true});
//acquire the connection (to check if it's successful)
const db = mongoose.connection;
//If there is error , print error
db.on('error', console.error.bind('console', 'Connection error'));
//If connection is established
db.once('open', function() {
    console.log("Connected to database!!!");
});

module.exports = db;