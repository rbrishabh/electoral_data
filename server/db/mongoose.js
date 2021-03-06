const mongoose = require('mongoose');
const urlLocal = 'mongodb://localhost:27017/electoralDatabase';
const urlDeploy = process.env.URI;
const database =  urlDeploy;
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});
mongoose.Promise = global.Promise;
mongoose.connect(database,{
    useMongoClient: true
});


module.exports = {mongoose,db};
