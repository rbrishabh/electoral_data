var {mongoose,db} = require('./../server/db/mongoose');


var {civilian} = require('./../server/models/civilian');

civilian.find({mobile:'9985085811'}).count().then((count)=>{
     console.log(count)
})
