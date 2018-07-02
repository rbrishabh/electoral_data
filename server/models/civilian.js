const mongoose = require('mongoose');
const civilModel = 'civilian'

var civilian = mongoose.model(civilModel, {
    name: {
        type: String,
        required: true,
        trim:true,
        minlength:1
    },
    mobile: {
        type: Number,
        required: true,
        trim:true,
        unique:true
    },
    fatherName: {
        type: String,
        trim:true
    },
    age: {
        type: Number,
        required: true,
        trim:true
    },
    gender: {
        type: String,
        required: true,
        trim:true
    },
    profession: {
        type: String,

        trim:true
    },
    email: {
        type: String,

        trim:true
    },
    village: {
        type: String,

        trim:true
    },
    block: {
        type: String,

        trim:true
    },
    district: {
        type: String,
        required: true,
        trim:true
    },
    state: {
        type: String,
        required: true,
        trim:true
    },
    mark: {
        type: String,

        trim:true
    }
});

module.exports =  {civilian};