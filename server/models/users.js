const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');
const bcrypt = require('bcryptjs');



var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim:true,
        unique:true,

    },
    password:{
        type: String,
        minlength:6,
        required:true
    },
    name: {
        type: String,
        required: true,
        trim:true

    },
    middleName: {
        type: String,
        trim:true
    },
    lastName: {
        type: String,
        trim:true
    },
    mobile: {
        type: Number,
        unique:true,
        required: true,
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
    occupation: {
        type: String,
        required: true,
        trim:true
    },
    occOther:{
        type: String,
        trim: true
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
        trim:true
    },
    state: {
        type: String,
        trim:true
    },
    villageOwn: {
        type: String,
        trim:true
    },
    blockOwn: {
        type: String,
        trim:true
    },
    districtOwn: {
        type: String,
        trim:true
    },
    stateOwn: {
        type: String,
        trim:true
    },
    pinOwn: {
        type: String,
        trim:true
    },
    verifiedMobile: {
        type: String,
        trim:true
    },
    mark: {
        type: String,
        trim:true
    },
    citizenAdd: {
        type: String,
        trim:true
    },
    citizenEdit: {
        type: String,
        trim:true
    },
    adminAdd: {
        type: String,
        trim:true
    },
    adminEdit: {
        type: String,
        trim:true
    },
    addressAED: {
        type: String,
        trim:true
    },
    notes: {
        type: String,
        trim:true
    },
    printRights: {
        type: String,
        trim:true
    },
    printRightsL: {
        type: String,
        trim:true
    },
    dateTime: {
        type: String,
        trim:true
    },
    time: {
        type: String,
        trim:true
    },
    createdBy: {
        type: String,
        trim:true
    },
    messageRights: {
        type: String,
        trim:true
    },
    level: {
        type: String,
        trim:true
    }
});


userSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject, ['_id', 'email']);
};


userSchema.statics.findByCredentials = function (email , password) {
    var Users = this;
    return Users.findOne({email}).then((user)=>{
        if(!user){
            return Promise.reject();
        }
        return new Promise((resolve,reject)=>{
            var hashedPass = user.password;
            bcrypt.compare(password,hashedPass,(err,res)=>{
                if(!res){
                    reject();
                }
                else {
                    resolve(user);
                }
            });
        });
    });
};


userSchema.pre('save', function (next) {
    var user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(user.password, salt, (err,hash)=>{
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }

});

var Users = mongoose.model('Users', userSchema);

module.exports = {Users};