var {mongoose,db} = require('./../server/db/mongoose');
var {civilian} = require('./../server/models/civilian');

var {address} = require('./../server/models/address');

civilian.update({"block": 'Berinag', "district": "Pithoragarh"},
    {$set:{ "block" : 'Berinag'}}, {multi: true}).then((address)=>{
        console.log(address);
});