var {mongoose,db} = require('./../server/db/mongoose');

var {address} = require('./../server/models/address');
// address.distinct("district",{state:"Uttarakhand"}).then((address)=>{
//     if(!address){
//         res.send();
//     } else {
//         console.log({address});
//
//     }
// },(e)=>{
//     console.log(e);
// }).catch((e)=>{
//     console.log(e);
// });

//
// var newAddress = new address({
//     state: 'Delhi',
//     district: 'west'
// });
//
//
// newAddress.save().then((doc)=>{
//    console.log(doc);
// }, (e)=>{
//     res.status(400).send(e);
// });

address.distinct("Block",{state:'Uttarakhand', district:'Nainital'}).then((address)=>{
    if(!address){
    } else {
        console.log(address)
    }
},(e)=>{
}).catch((e)=>{
});
