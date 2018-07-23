var {mongoose,db} = require('./../server/db/mongoose');

var {address} = require('./../server/models/address');

address.update({"block": 'Partapnager', "district": "Tehri Garhwal"},
    {$set:{ "block" : 'Partapnagar'}}, {multi: true}).then((address)=>{
        console.log(address);
});