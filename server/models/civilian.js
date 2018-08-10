const mongoose = require('mongoose');
const civilModel = 'civilian'

var civilian = mongoose.model(civilModel, {
    title: {
        type: String,
        trim:true
    },
    name: {
        type: String,
        required: true,
        trim:true,
        minlength:1
    },
    lastName: {
        type: String,
        trim:true
    },
    middleName: {
        type: String,
        trim:true
    },
    relation: {
        type: String,
        trim:true
    },
    relationTitle: {
        type: String,
        trim:true
    },
    relationName: {
        type: String,
        trim:true
    },
    relationMiddle: {
        type: String,
        trim:true
    },
    relationLast: {
        type: String,
        trim:true
    },
    mobile: {
        type: Number,
        required: true,
        trim:true,
        unique:true
    },
    secondMobile: {
        type: Number,
        trim:true
    },
    thirdMobile: {
        type: Number,
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
    notes: {
        type: String,
        trim:true
    },
    professionOther: {
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
    pin: {
        type: Number,
        trim:true
    },
    dob: {
        type: String,
        trim:true
    },
    mark: {
        type: String,

        trim:true
    },
    validationCheck: {
        type: String,
        trim:true
    }
});

module.exports =  {civilian};