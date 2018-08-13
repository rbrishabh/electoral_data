const mongoose = require('mongoose');
const addressModel = 'address'

var address = mongoose.model(addressModel, {
    state: {
        type: String,
        trim:true
    },
    village: {
        type: String,
        trim:true,
    },
    block: {
        type: String,
        trim:true
    },
    district: {
        type: String,
        trim:true
    },
    pin: {
        type: String,
        trim:true
    },
    addedByBlock: {
        type: String,
        trim:true
    },
    addedByVillage: {
        type: String,
        trim:true
    },
    editedByBlock: {
        type: String,
        trim:true
    },
    editedByVillage: {
        type: String,
        trim:true
    },
    dateTimeBlock: {
        type: String,
        trim:true
    },
    dateTimeVillage: {
        type: String,
        trim:true
    },
    dateTimeEdit: {
        type: String,
        trim:true
    },
    timeEdit: {
        type: String,
        trim:true
    },
    time: {
        type: String,
        trim:true
    }
});

module.exports =  {address};