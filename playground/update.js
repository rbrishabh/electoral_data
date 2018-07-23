var {mongoose,db} = require('./../server/db/mongoose');

var {address} = require('./../server/models/address');

address.update({"block": 'Bajpur', "district": "Udham Singh Nagar"},
    {$set:{ "block" : 'Bazpur'}}, {multi: true}).then((address)=>{
        console.log(address);
});