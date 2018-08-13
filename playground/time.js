var {address} = require('./../server/models/address');


address.distinct("block").then((block)=>{
    console.log(block);
});

    // civilian.find({dateTime:moment().utcOffset("+05:30").format('DD-MM-YYYY')}).count().then((counterCivilToday)=>{
    //     var countCivilToday =  counterCivilToday.toString();
    //
    //     civilian.find({gender:'Male'}).count().then((counterCivilMale)=> {
    //         var countCivilMale = counterCivilMale.toString();
    //
    //         civilian.find({gender: 'Female'}).count().then((counterCivilFemale) => {
    //             var countCivilFemale = counterCivilFemale.toString();
    // console.log(length1);
