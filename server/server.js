const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
 var {mongoose,db} = require('./db/mongoose');
 var {civilian} = require('./models/civilian');
var {address} = require('./models/address');
 const bcrypt = require('bcryptjs');
const _ = require('lodash');
const session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var speakeasy = require('speakeasy');
const request = require('request');
var getAge = require('get-age')
const moment = require('moment');
value = {};

const{Users}= require('./models/users');
const {authenticate,authenticated} = require('./middleware/authenticate');

const fs = require('fs');


const app = express();
const port = process.env.PORT || 80;


app.set('view engine', 'hbs');

app.use(express.static(__dirname+'./../views/img'));
app.use(express.static(__dirname+'./../views/hbsJS'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));

app.get('/',authenticated, (req,res)=> {
    res.render('login.hbs', {
        pageTitle : "Login page"
    })
});

app.get('/civilCount', authenticated, (req,res)=> {
    civilian.count().then((counterCivil)=>{
        var counterCivil =  counterCivil.toString();
        civilian.find({dateTime:moment().utcOffset("+05:30").format('DD-MM-YYYY')}).count().then((counterCivilToday)=>{
            var countCivilToday =  counterCivilToday.toString();

            civilian.find({gender:'Male'}).count().then((counterCivilMale)=> {
                var countCivilMale = counterCivilMale.toString();

                civilian.find({gender: 'Female'}).count().then((counterCivilFemale) => {
                    var countCivilFemale = counterCivilFemale.toString();
                    res.send({counterCivil, countCivilToday, countCivilMale, countCivilFemale});
                });
            });
        });
    });
});


app.get('/addressCount', authenticated, (req,res)=> {

    address.distinct("block").then((block)=>{
        var blockLength = block.length;
        address.distinct("village").then((village)=> {
            var villageLength = village.length;
address.find({block: { $exists: true }, dateTime:moment().utcOffset("+05:30").format('DD-MM-YYYY')}).then((blockToday)=>{

    var blockToday = blockToday.length;
    address.find({village: { $exists: true }, dateTime:moment().utcOffset("+05:30").format('DD-MM-YYYY')}).then((villageToday)=>{
        var villageToday = villageToday.length;
        res.send({villageToday, blockLength,villageLength, blockToday});
    });
});

        });

        });
});

app.get('/addressSettings', authenticate, (req,res)=> {
    var user = req.session.userId;
    var obj = {};
    Users.findById(user).then((user) => {
        console.log(user);
        if (user.state) {
            obj.state = user.state
        }
        if (user.village) {
            obj.village = user.village
        }
        if (user.block) {
            obj.block = user.block
        }
        if (user.district) {
            obj.district = user.district
        }


        obj.level = user.level
        obj.addC = user.citizenAdd
        obj.editC = user.citizenEdit
        obj.addA = user.adminAdd
        obj.pageTitle = "Address Settings Page";
        res.render('addressSettings.hbs', obj);

    });
});


app.post('/addBlock/:block/:dist/:state', (req,res)=>{
    var user = req.session.userId;
    var obj = {};
    Users.findById(user).then((user)=>{
        var addedBy = user.email;
        var district = req.params.dist;
        var state = req.params.state;
        var block = req.params.block;
        var date = moment().utcOffset("+05:30").format('DD-MM-YYYY');
        var blockAddress = new address ({
            dateTime: date,
            addedByBlock: addedBy,
            state: state,
            block:block,
            district:district
        });
        blockAddress.save().then((doc)=>{
            res.send("1")
        }, (e)=>{
            res.send("0");
        }).catch((e)=>{
            res.send("0");
        });
    },(e)=>{
        res.status(400).send();
    }).catch((e)=>{
        res.status(400).send();
    });
});

app.post('/delBlock/:block/:dist/:state', (req,res)=>{

    var district = req.params.dist;
    var state = req.params.state;
    var block = req.params.block;

    civilian.remove({'district': district, 'state':state, 'block':block}).then((deletedDocs)=>{
    }, (e)=>{
        res.send("0");
    }).catch((e)=>{
        res.send("0");
    });
    address.remove({'district': district, 'state':state, 'block':block}).then((deletedDocs)=>{
        res.send('1');
    }, (e)=>{
        res.send("0");
    }).catch((e)=>{
        res.send("0");
    });
});

app.post('/addVillage/:village/:block/:dist/:state', (req,res)=>{
    var user = req.session.userId;
    var obj = {};
    Users.findById(user).then((user)=>{
        var addedBy = user.email;
        var village = req.params.village;
        var district = req.params.dist;
        var state = req.params.state;
        var block = req.params.block;
        var date = moment().utcOffset("+05:30").format('DD-MM-YYYY');
        var blockAddress = new address ({
            dateTime: date,
            addedByVillage: addedBy,
            village : village,
            state: state,
            block:block,
            district:district
        });
        blockAddress.save().then((doc)=>{
            res.send("1")
        }, (e)=>{
            res.send("0");
        }).catch((e)=>{
            res.send("0");
        });
    },(e)=>{
        res.status(400).send();
    }).catch((e)=>{
        res.status(400).send();
    });

});

app.post('/delVillage/:district/:state/:block/:village', (req,res)=>{
    console.log('this is rb')
    var village = req.params.village;
    var district = req.params.district;
    var state = req.params.state;
    var block = req.params.block;
    console.log(village, district, state, block)
    // address.remove({'district': district, 'state':state, 'block':block, 'village':village}).then((ok)=>{
    //     res.send('1');
    // }, (e)=>{
    //     res.send("0");
    // }).catch((e)=>{
    //     res.send("0");
    // });
    address.remove({'district': district, 'state':state, 'block':block, 'village':village}).then((a)=>{
    res.send('1');
        }, (e)=>{
        res.send("0");
    }).catch((e)=>{
        res.send("0");
    });

});


app.post('/editBlock/:dist/:state/:block/:editedBlock', (req,res)=>{
    var block = req.params.block;
    var district = req.params.dist;
    var state = req.params.state;
    var editedBlock = req.params.editedBlock;
    civilian.update({"block": block, "district": district, "state":state},
        {$set:{ "block" : editedBlock}}, {multi: true}).then((address)=>{
    }, (e)=>{
            res.send('0');
    }).catch((e)=>{
        res.send('0');
    });
    address.update({"block": block, "district": district, "state":state},
        {$set:{ "block" : editedBlock}}, {multi: true}).then((address)=>{
        res.send('1')
    }, (e)=>{
        res.send('0');
    }).catch((e)=>{
        res.send('0');
    });

});

app.post('/editVillage/:dist/:state/:block/:village/:editedVillage', (req,res)=>{
    var block = req.params.block;
    var district = req.params.dist;
    var state = req.params.state;
    var editedVillage = req.params.editedVillage;
    var village = req.params.village;
    address.update({"block": block, "district": district, "state":state, "village": village},
        {$set:{ "village" : editedVillage}}, {multi: true}).then((address)=>{
        res.send('1')
    }, (e)=>{
        res.send('0');
    }).catch((e)=>{
        res.send('0');
    });

    civilian.update({"block": block, "district": district, "state":state, "village":village},
        {$set:{ "village" : editedVillage}}, {multi: true}).then((address)=>{
    }, (e)=>{
        res.send('0');
    }).catch((e)=>{
        res.send('0');
    });


});


app.get('/superAdmin',authenticate,(req,res)=> {
    res.render('superAdmin.hbs', {
        pageTitle : "Settings page"
    })
});

app.get('/registrationElectoral',authenticate,(req,res)=> {
    res.render('registration.hbs', {
        pageTitle : "registration page"
    })
});

app.get('/queryAdd',authenticate,(req,res)=> {
    var user = req.session.userId;
    var obj = {};
    Users.findById(user).then((user) => {
        console.log(user);
        if (user.state) {
            obj.state = user.state
        }
        if (user.village) {
            obj.village = user.village
        }
        if (user.block) {
            obj.block = user.block
        }
        if (user.district) {
            obj.district = user.district
        }


        obj.level = user.level
        obj.addC = user.citizenAdd
        obj.editC = user.citizenEdit
        obj.addA = user.adminAdd
        res.render('queryAdd.hbs', obj)
    });
});

app.get('/addCivilData',(req,res)=> {
    res.render('newCivilAdd.hbs', {
        pageTitle : "Add new query"
    })
});

app.get('/querySearch',authenticate,(req,res)=> {
    var user = req.session.userId;
    var obj = {};
    Users.findById(user).then((user)=>{
        console.log(user);
        if(user.state){
            obj.state = user.state
        }
        if(user.village){
            obj.village = user.village
        }
        if(user.block){
            obj.block = user.block
        }
        if(user.district){
            obj.district = user.district
        }


            obj.level = user.level
            obj.message= user.messageRights
            obj.print= user.printRightsL
            obj.addC = user.citizenAdd
            obj.editC= user.citizenEdit
            obj.addA = user.adminAdd

        res.render('querySearchNew.hbs', obj);
    });

});


app.post('/queryAddedCivil', function (req, res) {
    console.log(req.body.otp)

    var otpNew = req.body.otp;
    console.log(otpNew);
    if(req.body.otp){
        tokenValidates = speakeasy.totp.verify({
            secret: secret.base32,
            encoding: 'base32',
            token: otpNew,
            window: 6
        });
    }

    var dob = req.body.dob;
    if(req.body.age == undefined || req.body.age == "" || req.body.age == null){

        var date = new Date(dob).getDate()
        var month = new Date(dob).getMonth();
        var year = new Date(dob).getFullYear();
        var newDate = "";
        newDate = year +'-' + (month+1) + '-' + date;
        var age = getAge(newDate)
    }
    else {
        age = req.body.age;
    }


if(tokenValidates) {
    var date = moment().utcOffset("+05:30").format('DD-MM-YYYY');

    var newCivilian = new civilian({
        title : req.body.title,
        name: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        relation: req.body.optionsRadios,
        relationTitle: req.body.relationTitle,
        relationName: req.body.relationFirst,
        relationMiddle: req.body.relationMiddle,
        relationLast: req.body.relationLast,
        mobile: req.body.mobile,
        secondMobile: req.body.secondMobile,
        thirdMobile: req.body.thirdMobile,
        email: req.body.email,
        age: age,
        gender: req.body.gender,
        profession: req.body.occ,
        professionOther: req.body.occOther,
        village: req.body.village,
        block: req.body.block,
        district: req.body.district,
        state: req.body.state,
        pin: req.body.pin,
        mark: req.body.mark,
        validationCheck :  'true',
        dateTime: date,
        createdBy: 'local@genesis-in.com'
    });

    newCivilian.save().then((doc)=>{
        res.render('newCivilAdd.hbs', {
            pageReturn: "1",
            message: "Data Succesfully Added!"
        });
    }, (e)=>{

        res.render('newCivilAdd.hbs', {
            pageReturn: "1",
            message:"Something went wrong. Please try again."

        });
    }).catch((e)=>{
        res.render('newCivilAdd.hbs', {
            pageReturn: "1",
            message:"Something went wrong. Please try again."

        });
    });

}
else {
    res.render('newCivilAdd.hbs', {
        pageReturn: "1",
        message: "The OTP you entered was incorrect!"
    });
    }


});
app.post('/queryAddedCivilAuth', authenticate, function (req, res) {
    var otpNew = req.body.otp;
    console.log(otpNew);

    if (req.body.otp) {
        tokenValidates = speakeasy.totp.verify({
            secret: secret.base32,
            encoding: 'base32',
            token: otpNew,
            window: 6
        });
        if (tokenValidates) {
            req.body.validationCheck = 'true';
        }
    }


    var dob = req.body.dob;
    if (req.body.age == undefined || req.body.age == "" || req.body.age == null) {

        var date = new Date(dob).getDate()
        var month = new Date(dob).getMonth();
        var year = new Date(dob).getFullYear();
        var newDate = "";
        newDate = year + '-' + (month + 1) + '-' + date;
        var age = getAge(newDate)
    }
    else {
        age = req.body.age;
    }

    var date = moment().utcOffset("+05:30").format('DD-MM-YYYY');
    var user = req.session.userId;
    Users.findById(user).then((user) => {
    var createdBy = user.email;


        var newCivilian = new civilian({
            title: req.body.title,
            name: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            relation: req.body.optionsRadios,
            relationTitle: req.body.relationTitle,
            relationName: req.body.relationFirst,
            relationMiddle: req.body.relationMiddle,
            relationLast: req.body.relationLast,
            mobile: req.body.mobile,
            secondMobile: req.body.secondMobile,
            thirdMobile: req.body.thirdMobile,
            email: req.body.email,
            age: age,
            gender: req.body.gender,
            profession: req.body.occ,
            professionOther: req.body.occOther,
            village: req.body.village,
            block: req.body.block,
            district: req.body.district,
            state: req.body.state,
            pin: req.body.pin,
            mark: req.body.mark,
            notes: req.body.notes,
            validationCheck: req.body.validationCheck,
            dateTime: date,
            createdBy: createdBy
        });

        newCivilian.save().then((doc) => {

            var obj = {};
            Users.findById(user).then((user) => {
                console.log(user);
                if (user.state) {
                    obj.state = user.state
                }
                if (user.village) {
                    obj.village = user.village
                }
                if (user.block) {
                    obj.block = user.block
                }
                if (user.district) {
                    obj.district = user.district
                }


                obj.level = user.level
                obj.addC = user.citizenAdd
                obj.editC = user.citizenEdit
                obj.addA = user.adminAdd
                obj.message = "Data Succesfully Added!";
                obj.pageReturn = "1"
                res.render('queryAdd.hbs', obj);
            }, (e) => {
                res.send(e);
            });


        }, (e)=>{

            var user = req.session.userId;
            var obj = {};
            Users.findById(user).then((user) => {
                console.log(user);
                if (user.state) {
                    obj.state = user.state
                }
                if (user.village) {
                    obj.village = user.village
                }
                if (user.block) {
                    obj.block = user.block
                }
                if (user.district) {
                    obj.district = user.district
                }

                obj.level = user.level
                obj.addC = user.citizenAdd
                obj.editC = user.citizenEdit
                obj.addA = user.adminAdd
                obj.message = "Mobile/Email already exists.";
                obj.pageReturn = "1"
                res.render('queryAdd.hbs', obj);
            }, (e) => {
                res.send(e);
            });
        }).catch((e)=>{
            var user = req.session.userId;
            var obj = {};
            Users.findById(user).then((user) => {
                console.log(user);
                if (user.state) {
                    obj.state = user.state
                }
                if (user.village) {
                    obj.village = user.village
                }
                if (user.block) {
                    obj.block = user.block
                }
                if (user.district) {
                    obj.district = user.district
                }


                obj.level = user.level
                obj.addC = user.citizenAdd
                obj.editC = user.citizenEdit
                obj.addA = user.adminAdd
                obj.message =  "Mobile/Email already exists.";
                obj.pageReturn = "1"
                res.render('queryAdd.hbs', obj);
            }, (e) => {
                res.send(e);
            });
        });

    }, (e) => {
        res.send(e);
    }).catch((e)=>{
    res.send(e);
});
});

app.get('/getNumber/:email', (req,res)=>{


    var email = req.params.email;
    Users.find({
        email:email,
    }).then((user)=>{
        var mobileNumber={};
           mobileNumber.number = user[0].mobile;

        secret = speakeasy.generateSecret({length: 6});

        var token = speakeasy.totp({
            secret: secret.base32,
            encoding: 'base32'
        });
        var url = 'http://bhashsms.com/api/sendmsg.php?user=genesissms&pass=123456&sender=GENSIS&phone=' + mobileNumber.number + '&text=' + token + ' is your One Time Password for authenticating Electoral System.&priority=ndnd&stype=normal'
        request({url:url}, (error, response, body)=>{
            if(error) {

            }
        });
        console.log(url);
        res.send({'message':'OTP sending'});
    },
        (e)=>{
            res.send({'message':'Incorrect Email!'});

        }).catch((e)=>{
        res.send({'message':'Incorrect Email!'});
    });

});

app.get('/message', (req,res)=>{
    console.log('sending starts!');


    var message = req.query.message
    var arr = req.query.array.split(",")
    var arr1 = [];
    for(var x in arr){
        arr1.push(arr[x].split("-"))
    }
    for( var x in arr1){
        var url = 'http://bhashsms.com/api/sendmsg.php?user=genesissms&pass=123456&sender=GENSIS&phone=' + arr1[x][0] + '&text=' + arr1[x][1] +' '+ arr1[x][2] +' '+ arr1[x][3] + '%0D%0A'+ message +'&priority=ndnd&stype=normal'
        request({url:url}, (error, response, body)=>{
            if(error) {

            }
        });        console.log(url)
    }
    var user1 = req.session.userId;

    var no = arr1.length;
    console.log(no);
    Users.findById(user1).then((user1) => {
        var mobile = user1.mobile;

        if(user1.messageRights>0){
            var messageRights = user1.messageRights-no;

            var obj ={};
            obj.messageRights = messageRights;
            Users.update({"mobile": mobile},
                {$set:obj}).then((user)=>{
                res.send({messageRights});

            });
        }
        else{
            messageRights = user1.messageRights;
            res.send({messageRights});
        }
    });


     console.log(arr1, message);
});





app.get('/checkMobile/:mobile', (req,res)=> {
    console.log('started running afadaf')
var mobile = req.params.mobile;
    civilian.find({mobile:mobile}).count().then((count)=>{
        if(count>0){
            console.log('its more than 0')
            var string = "dont"
            res.send(string);
        } else {
            console.log('its okkkkk')
            res.send('go');
        }
    },(e)=>{
        res.status(400).send();
    }).catch((e)=>{
        res.status(400).send();
    });
});

app.get('/checkMobileReg/:mobile', (req,res)=> {
    console.log('started running afadaf')
    var mobile = req.params.mobile;
    Users.find({mobile:mobile}).count().then((count)=>{
        if(count>0){
            console.log(count)
            console.log('its more than 0')
            var string = "dont"
            res.send(string);
        } else {
            console.log(count)

            console.log('its okkkkk')
            res.send('go');
        }
    },(e)=>{
        res.status(400).send();
    }).catch((e)=>{
        res.status(400).send();
    });
});
app.get('/getOTP1/:mobile', (req,res)=>{

    var mobile = req.params.mobile;
    console.log(mobile);
    secret = speakeasy.generateSecret({length: 6});

    var token = speakeasy.totp({
        secret: secret.base32,
        encoding: 'base32'
    });
    var url = 'http://bhashsms.com/api/sendmsg.php?user=genesissms&pass=123456&sender=GENSIS&phone=' + mobile + '&text=' + token + ' is your One Time Password for authenticating Electoral System.&priority=ndnd&stype=normal'
    request({url:url}, (error, response, body)=>{
        if(error) {

        }
    });    console.log(url);
    res.send({'message':'OTP sending'});
});
app.get('/getOTPReg/:mobile', (req,res)=>{

    var mobile = req.params.mobile;
    console.log(mobile);
    secret = speakeasy.generateSecret({length: 6});

    var token = speakeasy.totp({
        secret: secret.base32,
        encoding: 'base32'
    });
    var url = 'http://bhashsms.com/api/sendmsg.php?user=genesissms&pass=123456&sender=GENSIS&phone=' + mobile + '&text=' + token + ' is your One Time Password for authenticating Electoral System.&priority=ndnd&stype=normal'
    request({url:url}, (error, response, body)=>{
        if(error) {

        }
    });    console.log(url);
    res.send({'message':'OTP sending'});
});



app.post('/',authenticated, (req,res)=> {
    var body = _.pick(req.body, ['email', 'password', 'enterotp']);
    var email = body.email;
    var password = body.password;
    var otp = body.enterotp;
console.log(email);
    if(password){
        Users.findByCredentials(email, password).then((user) => {
            req.session.userId = user._id;
            console.log(user._id, '23123');

            res.redirect('/querySearch')
        }).catch((e) => {
            res.render('login.hbs', {
                message: 'Password incorrect'
            });
        });
         }
 else if(otp) {
        console.log(otp);
        tokenValidates = speakeasy.totp.verify({
            secret: secret.base32,
            encoding: 'base32',
            token: otp,
            window: 6
        });
        if(tokenValidates){
            console.log(tokenValidates)
            // console.log(email)
            Users.find({
                email:email
            }).then((user) => {
                console.log('user',user);
                req.session.userId = user[0]._id;
                console.log(user[0]._id, 'otp sgn in');

                res.redirect('/querySearch')
            }).catch((e) => {
                res.render('login.hbs', {
                    message:'Incorrect OTP'
                });
            });
        } else {
            res.render('login.hbs', {
                message:'Incorrect OTP'
            });
        }

}

});
app.get('/querysearch6/:village', (req,res)=>{


    var village = req.params.village;
    civilian.find({
        village:village
    }).then((civilian)=>{
        if(!civilian){
            res.send();
        } else {
            res.status(200).send({civilian});
        }
    },(e)=>{
        res.status(400).send();
    }).catch((e)=>{
        res.status(400).send();
    });

});

app.get('/querysearch7/:block', (req,res)=>{


    var block = req.params.block;
    civilian.find({
        block:block
    }).then((civilian)=>{
        if(!civilian){
            res.send();
        } else {
            res.status(200).send({civilian});
        }
    },(e)=>{
        res.status(400).send();
    }).catch((e)=>{
        res.status(400).send();
    });

});

app.get('/querysearch8/:district', (req,res)=>{


    var district = req.params.district;
    civilian.find({
        district:district
    }).then((civilian)=>{
        if(!civilian){
            res.send();
        } else {
            res.status(200).send({civilian});
        }
    },(e)=>{
        res.status(400).send();
    }).catch((e)=>{
        res.status(400).send();
    });

});

app.get('/querysearch9/:state', (req,res)=>{


    var state = req.params.state;
    civilian.find({
        state:state
    }).then((civilian)=>{
        if(!civilian){
            res.send();
        } else {
            res.status(200).send({civilian});
        }
    },(e)=>{
        res.status(400).send();
    }).catch((e)=>{
        res.status(400).send();
    });

});

app.get('/initialSearch/state/:state/district/:district/block/:block/village/:village', (req,res)=>{
 console.log('reached here');
 var query = {};

    if(req.params.state != "00") {
     query.state = req.params.state;
    }
    if(req.params.district!="00"){
        query.district = req.params.district
    }
    if(req.params.block!="00"){
        query.block = req.params.block
    }
    if(req.params.village!="00"){
        query.village= req.params.village
    }
    console.log(req.params.state, req.params.block, 'abc', req.params.village, req.params.district)
    civilian.find(query).then((civilian)=>{
        if(!civilian){
            console.log('if running')
            res.send();
        } else {
            console.log('else running')
            res.status(200).send({civilian});
        }
    },(e)=>{
        res.status(400).send();
    }).catch((e)=>{
        res.status(400).send();
    });

});

app.get('/buttonSearch/:state/:district/:block/:village/:pin/:firstName/:middleName/:lastName/:relationName/:relationMiddle/:relationLast/:minage/:maxage/:occ/:occother/:mobile/:email/:gender/:mark', (req,res)=>{
    console.log('search botton reached server');
    var query = {};
    var age = {};
    if(req.params.state != "00") {
        query.state = req.params.state;
    }
    if(req.params.district!="00"){
        query.district = req.params.district
    }
    if(req.params.block!="00"){
        query.block = req.params.block
    }
    if(req.params.village!="00"){
        query.village= req.params.village
    }
    if(req.params.pin!="00"){
        query.pin= req.params.pin
    }
    if(req.params.firstName!="00"){
       query.name= req.params.firstName


    }
    if(req.params.middleName!="00"){
        query.middleName= req.params.middleName

    }
    if(req.params.lastName!="00"){
       query.lastName= req.params.lastName

    }
    if(req.params.relationName!="00"){
        query.relationName= req.params.relationName


    }
    if(req.params.relationMiddle!="00"){
        query.relationMiddle= req.params.relationMiddle

    }
    if(req.params.relationLast!="00"){
        query.relationLast= req.params.relationLast
    }
    if(req.params.minage!="00" && req.params.maxage == "00"){
        query.age= {$gte: req.params.minage}
    }
    if(req.params.maxage!="00" && req.params.minage == "00"){
        query.age= {$lte: req.params.maxage}
    }
    if(req.params.minage!="00" && req.params.maxage != "00"){
        query.age= {$lte: req.params.maxage, $gte: req.params.minage}
        }
    if(req.params.occ!="00"){
        query.profession= req.params.occ
    }
    if(req.params.occother!="00"){
        query.professionOther= req.params.occother
    }
    if(req.params.mobile!="00"){
        query.mobile= req.params.mobile
    }
    if(req.params.email!="00"){
        query.email= req.params.email
    }
    if(req.params.gender!="00"){
        query.gender= req.params.gender
    }
    if(req.params.mark!="00"){
        query.mark= req.params.mark
    }
    console.log(query, '123');
    civilian.find(query).then((civilian)=>{
        if(!civilian){
            console.log('if running')
            res.send();
        } else {
            console.log(civilian)

            console.log('else running')
            res.status(200).send({civilian});
        }
    },(e)=>{
        res.status(400).send();
    }).catch((e)=>{
        res.status(400).send();
    });

});






app.get('/state/:state', (req,res)=>{

   console.log(req.params.state);
    var state = req.params.state;
    address.distinct("district",{state:state}).then((address)=>{
        if(!address){
            res.send();
        } else {
            res.status(200).send({address});
        }
    },(e)=>{
        res.status(400).send();
    }).catch((e)=>{
        res.status(400).send();
    });

});
app.get('/district/:district/state/:state', (req,res)=>{
    var state1 = req.params.state;
    var district1 = req.params.district;
    console.log(state1, district1);
    address.distinct("block",{district:district1,state:state1 }).then((address)=>{
        if(!address){
            res.send();
        } else {
            console.log(address)
            res.status(200).send({address});
        }
    },(e)=>{
        res.status(400).send();
    }).catch((e)=>{
        res.status(400).send();
    });

});
app.get('/district/:district/state/:state/block/:block', (req,res)=>{
    var state1 = req.params.state;
    var district1 = req.params.district;
    var block1 = req.params.block;
    console.log(state1, district1, block1);
    address.distinct("village",{district:district1,state:state1, block:block1 }).then((address)=>{
        if(!address){
            res.send();
        } else {
            console.log(address)
            res.status(200).send({address});
        }
    },(e)=>{
        res.status(400).send();
    }).catch((e)=>{
        res.status(400).send();
    });

});
app.get('/forgot',authenticated, (req,res)=> {
    res.render('forgotPass.hbs', {
        pageTitle : "Reset password"
    })
});

app.post('/forgot', (req,res)=>{
   res.redirect('/change_password');
});

app.post('/change_password', (req,res)=>{
    res.render('change_password.hbs',{
        pageTitle:"Change Password!"
    });
});

app.post('/passwordChanged',authenticate, (req,res)=>{

    res.redirect('/');

});


app.post('/addedAdmin', authenticate, (req,res)=>{
    var obj = {};
    var user1 = req.session.userId;


    if(req.body.state){
        obj.state = req.body.state
    }
    if(req.body.district){
        obj.district = req.body.district
    }
    if(req.body.block){
        obj.block = req.body.block
    }
    if(req.body.village){
        obj.village = req.body.village
    }
    if(req.body.citizenAdd){
        obj.citizenAdd = req.body.citizenAdd
    }
    if(req.body.citizenEdit){
        obj.citizenEdit = req.body.citizenEdit
    }
    if(req.body.adminAdd){
        obj.adminAdd = req.body.adminAdd
    }
    if(req.body.messageRights) {
        obj.messageRights = req.body.messageRights;
        var obj1 = {};
        var no = req.body.messageRights;
        console.log(no);
        Users.findById(user1).then((user1) => {
            var mobile = user1.mobile;

            if (user1.messageRights > 0) {
                var messageRights = user1.messageRights - no;

                obj1.messageRights = messageRights;
                Users.update({"mobile": mobile},
                    {$set: obj1}).then((user) => {
                    console.log(user);
                    });
            }
        });
    }
    if(req.body.printRights){
        obj.printRights = req.body.printRights;
        obj.printRightsL = req.body.printRights;
    }
    if(req.body.optionsRadio){
        obj.level = req.body.optionsRadio
    }
    Users.update({"email": req.body.email},
        {$set:obj}).then((user)=>{
    res.redirect('/querySearch');
            }, (e)=>{
        res.send('0');
    }).catch((e)=>{
        res.send('0');
    });
});

app.get('/printDecrement', (req,res)=>{


    var user1 = req.session.userId;
    var obj = {};
    Users.findById(user1).then((user1) => {
        var mobile = user1.mobile;
        console.log(mobile);
        if(user1.printRightsL>0){
            var printRightsL = user1.printRightsL-1;
            var obj ={};
            obj.printRightsL = printRightsL;
            Users.update({"mobile": mobile},
                {$set:obj}).then((user)=>{
                    res.send({printRightsL});
            });
        }
        else {
            printRightsL = user1.printRightsL;
            res.send({printRightsL});
        }
    });

});



app.post('/registrationElectoralData' , authenticate, (req, res) => {
var otp = req.body.otp;
    console.log(otp);
    if(req.body.otp){
        tokenValidates = speakeasy.totp.verify({
            secret: secret.base32,
            encoding: 'base32',
            token: otp,
            window: 6
        });
        if(tokenValidates){
            req.body.verifiedMobile = 'true';
        }

    }


if(req.body.password !== req.body.confirm){
        res.render('registration.hbs', {
            pageTitle: "Registration unsuccessful.",
            message: "Passwords do not match! Please try again."
        });
    } else {
    var user1 = req.session.userId;
    Users.findById(user1).then((user1) => {

        var body = _.pick(req.body, ['email', 'name', 'middleName', 'mobile', 'lastName', 'age', 'gender', 'mark', 'occupation', 'occOther', 'notes', 'password', 'stateOwn', 'districtOwn', 'blockOwn', 'villageOwn', 'pinOwn', 'verifiedMobile']);
        body.dateTime = moment().utcOffset("+05:30").format('DD-MM-YYYY');
        body.createdBy = user1.email;
        var user = new Users(body);
        user.save().then(() => {
            var obj = {};
            Users.findById(user1).then((user1) => {
                console.log(user1);
                if (user1.state) {
                    obj.state = user1.state
                }
                if (user1.village) {
                    obj.village = user1.village
                }
                if (user1.block) {
                    obj.block = user1.block
                }
                if (user1.district) {
                    obj.district = user1.district
                }

                obj.level = user1.level
                obj.addC = user1.citizenAdd
                obj.editC = user1.citizenEdit
                obj.addA = user1.adminAdd
                obj.name = req.body.name
                obj.email = req.body.email
                obj.message = user1.messageRights
                obj.print = user1.printRights

                res.render('registrationS.hbs', obj);

            }, (e) => {
                res.send(e);
            }).catch((e) => {
                res.send(e);
            });
        }, (e) => {

            var user = req.session.userId;
            var obj = {};
            Users.findById(user).then((user) => {
                console.log(user);
                if (user.state) {
                    obj.state = user.state
                }
                if (user.village) {
                    obj.village = user.village
                }
                if (user.block) {
                    obj.block = user.block
                }
                if (user.district) {
                    obj.district = user.district
                }

                obj.level = user.level
                obj.addC = user.citizenAdd
                obj.editC = user.citizenEdit
                obj.addA = user.adminAdd
                obj.message = "Mobile/Email already exists.";
                obj.pageReturn = "1"
                obj.name = req.body.name;
                res.render('registration.hbs', obj);
            }, (e) => {
                res.send(e);
            });
        }).catch((e) => {
            var user = req.session.userId;
            var obj = {};
            Users.findById(user).then((user) => {
                console.log(user);
                if (user.state) {
                    obj.state = user.state
                }
                if (user.village) {
                    obj.village = user.village
                }
                if (user.block) {
                    obj.block = user.block
                }
                if (user.district) {
                    obj.district = user.district
                }


                obj.level = user.level
                obj.addC = user.citizenAdd
                obj.editC = user.citizenEdit
                obj.addA = user.adminAdd
                obj.message = "Mobile/Email already exists.";
                obj.pageReturn = "1"
                res.render('registration.hbs', obj);
            }, (e) => {
                res.send(e);
            });
        });

    }, (e) => {
        res.send('0');
    }).catch((e) => {
        res.send('0');
    });
}
});

app.get('/home', authenticate, (req,res)=>{

    res.redirect('/querySearch');
});



app.get('/logout', function(req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
            if(err) {
                return next(err);
            } else {
                return res.redirect('/');
            }

        });
    }
    else res.redirect('/');
});



app.listen(port,()=> {
    console.log(`Server up on port ${port}`)});

