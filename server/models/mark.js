const mongoose = require('mongoose');
const markModel = 'mark';

var mark = mongoose.model(markModel, {
    name: {
        type: String,
        trim: true
    },
    value: {
        type: String,
        trim: true,
        unique:true
    }
});

module.exports =  {mark};