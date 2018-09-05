
address.find({block: { $exists: true }, dateTimeBlock:moment().utcOffset("+05:30").format('DD-MM-YYYY'), addedByBlock: user[i].email}).count().then((countTotal)=>{
    blockToday = countTotal

});
address.find({village: { $exists: true }, dateTimeBlock:moment().utcOffset("+05:30").format('DD-MM-YYYY'), addedByVillage: user[i].email}).count().then((countTotal)=>{
    villageToday = countTotal


});

address.find({block: { $exists: true }, addedByBlock: user[i].email}).count().then((countTotal)=>{
    blockTotal = countTotal


});
address.find({village: { $exists: true }, addedByVillage: user[i].email}).count().then((countTotal)=>{
    villageTotal = countTotal


});


civilian.find({createdBy:user[i].email}).count().then((count)=>{
    civilTotal = count;


});
civilian.find({createdBy:user[i].email, dateTimeBlock:moment().utcOffset("+05:30").format('DD-MM-YYYY')}).count().then((count)=>{


    civilToday = count;
});
                
                