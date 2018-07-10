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
    res.header('Access-Control-Allow-Origin', "*");
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

app.get('/superAdmin',authenticate,(req,res)=> {
    res.render('superAdmin.hbs', {
        pageTitle : "Settings page"
    })
});

app.get('/registration',authenticated,(req,res)=> {
    res.render('registration.hbs', {
        pageTitle : "registration page"
    })
});

app.get('/queryAdd',authenticate,(req,res)=> {
    res.render('queryAdd.hbs', {
        pageTitle : "Add new query"
    })
});

app.get('/addCivilData',(req,res)=> {
    res.render('newCivilAdd.hbs', {
        pageTitle : "Add new query"
    })
});

app.get('/querySearch',authenticate,(req,res)=> {
    res.render('querySearchNew.hbs', {
        pageTitle : "Add new query"
    })
});


app.post('/queryAddedCivil', function (req, res) {
    var dob = req.body.dob;
    if(req.body.age == undefined || req.body.age == "" || req.body.age == null){
        try {

            handleDOBChanged(dob)
        }
        catch (e) {
            console.log(e);
        }
        function handleDOBChanged(date) {


             age = calculateAge(parseDate(date), new Date());


        }

//convert the date string in the format of dd/mm/yyyy into a JS date object
        function parseDate(dateStr) {
            var dateParts = dateStr.split("/");
            return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
        }

//is valid date format
        function calculateAge (dateOfBirth, dateToCalculate) {
            var calculateYear = dateToCalculate.getFullYear();
            var calculateMonth = dateToCalculate.getMonth();
            var calculateDay = dateToCalculate.getDate();

            var birthYear = dateOfBirth.getFullYear();
            var birthMonth = dateOfBirth.getMonth();
            var birthDay = dateOfBirth.getDate();

            var age = calculateYear - birthYear;
            var ageMonth = calculateMonth - birthMonth;
            var ageDay = calculateDay - birthDay;

            if (ageMonth < 0 || (ageMonth == 0 && ageDay < 0)) {
                age = parseInt(age) - 1;
            }
            return age;
        }

        function isDate(txtDate) {
            var currVal = txtDate;
            if (currVal == '')
                return true;

            //Declare Regex
            var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
            var dtArray = currVal.match(rxDatePattern); // is format OK?

            if (dtArray == null)
                return false;

            //Checks for dd/mm/yyyy format.
            var dtDay = dtArray[1];
            var dtMonth = dtArray[3];
            var dtYear = dtArray[5];

            if (dtMonth < 1 || dtMonth > 12)
                return false;
            else if (dtDay < 1 || dtDay > 31)
                return false;
            else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
                return false;
            else if (dtMonth == 2) {
                var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
                if (dtDay > 29 || (dtDay == 29 && !isleap))
                    return false;
            }

            return true;
        }

    }
    else {
        age = req.body.age;
    }

console.log(req.body.validationCheck,'123123');
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
        validationCheck : req.body.validationCheck
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
    });


});
app.post('/queryAddedCivilAuth', function (req, res) {
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

    console.log(req.body.validationCheck,'123123');
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
        validationCheck : req.body.validationCheck
    });

    newCivilian.save().then((doc)=>{
        res.render('queryAdd.hbs', {
            pageReturn: "1",
            message: "Data Succesfully Added!"
        });
    }, (e)=>{
res.send(e)
        // res.render('queryAdd.hbs', {
        //     pageReturn: "1",
        //     message:"Something went wrong. Please try again."

        // });
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
        request(url);
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
    console.log('sending starts!')
    var message = req.query.message
    var arr = req.query.array.split(",")
    var arr1 = [];
    for(var x in arr){
        arr1.push(arr[x].split("-"))
    }
    for( var x in arr1){
        var url = 'http://bhashsms.com/api/sendmsg.php?user=genesissms&pass=123456&sender=GENSIS&phone=' + arr1[x][0] + '&text=' + arr1[x][1] +' '+ arr1[x][2] +' '+ arr1[x][3] + '%0D%0A'+ message +'&priority=ndnd&stype=normal'
        request(url);
        console.log(url)
    }


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
app.get('/getOTP1/:mobile', (req,res)=>{

    var mobile = req.params.mobile;
    console.log(mobile);
    secret = speakeasy.generateSecret({length: 6});

    var token = speakeasy.totp({
        secret: secret.base32,
        encoding: 'base32'
    });
    var url = 'http://bhashsms.com/api/sendmsg.php?user=genesissms&pass=123456&sender=GENSIS&phone=' + mobile + '&text=' + token + ' is your One Time Password for authenticating Electoral System.&priority=ndnd&stype=normal'
    request(url);
    console.log(url);
    res.send({'message':'OTP sending'});
});


app.get('/checkOTP/:otp', (req,res)=>{
    var otpNew = req.params.otp;
    console.log(otpNew);
    tokenValidates = speakeasy.totp.verify({
        secret: secret.base32,
        encoding: 'base32',
        token: otpNew,
        window: 6
    });

    res.send(tokenValidates);
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
        village:village,
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
        block:block,
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
        district:district,
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
        state:state,
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
    address.distinct("Block",{district:district1,state:state1 }).then((address)=>{
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
    address.distinct("Village",{district:district1,state:state1, Block:block1 }).then((address)=>{
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

app.post('/registrationS', authenticated , (req, res) => {
    var body = _.pick(req.body, ['email', 'password', 'name', 'mobile','age','gender','mark', 'occupation','state','district','block','village','notes']);
    var user = new Users(body);

    user.save().then(() => {
        res.render('registrationS.hbs', {
            pageTitle: "Registration Successful.",
            pageReturn: "Succesfully Registered"
        });

    }).catch((e) => {
        res.status(400).send(e);
    })
});

app.get('/home', authenticate, (req,res)=>{
    res.status(200).render('querySearchNew.hbs', {
        pageTitle: 'home',
        pageReturn: 'Succesfully logged in.'
    });
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

