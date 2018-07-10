const mongoose = require('mongoose');

const database = process.env.URI
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});
mongoose.Promise = global.Promise;
mongoose.connect(database);

module.exports = {mongoose,db};
