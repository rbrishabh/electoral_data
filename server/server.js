const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
var {mongoose,db} = require('./db/mongoose');
var {civilian} = require('./models/civilian');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var speakeasy = require('speakeasy');
const request = require('request');
value = {};

const{Users}= require('./models/users');
const {authenticate,authenticated} = require('./middleware/authenticate');

const fs = require('fs');


const app = express();
const port = 3000 || process.env.PORT;

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname+'./../views/partials');
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
    res.render('addDataC.hbs', {
        pageTitle : "Add new query"
    })
});

app.get('/querySearch',authenticate,(req,res)=> {
    res.render('querySearch1.hbs', {
        pageTitle : "Add new query"
    })
});


app.post('/queryAdded',authenticate, function (req, res) {

    var newCivilian = new civilian({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        fatherName: req.body.fatherName,
        age: req.body.age,
        gender: req.body.gender,
        profession: req.body.profession,
        village: req.body.village,
        block: req.body.block,
        district: req.body.district,
        state: req.body.state,
        mark: req.body.mark
    });

    newCivilian.save().then((doc)=>{
        res.render('queryAdd.hbs', {
            pageReturn: "Succesfully added!"
        });
    }, (e)=>{
        res.status(400).send(e);
    });


});

app.post('/queryAddedCivil', function (req, res) {
    var newCivilian = new civilian({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        fatherName: req.body.fatherName,
        age: req.body.age,
        gender: req.body.gender,
        profession: req.body.profession,
        village: req.body.village,
        block: req.body.block,
        district: req.body.district,
        state: req.body.state,
        mark: req.body.mark
    });

    newCivilian.save().then((doc)=>{
        res.render('thankYou.hbs', {
            pageTitle : "Query successfully added page",
            pageReturn: "Thank You For Registering With Us."
        });
    }, (e)=>{
        res.status(400).send(e);
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

app.get('/querysearch0/:name',authenticate, (req,res)=>{


    var name = req.params.name;
    civilian.find({
        name:name,
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
app.get('/querysearch1/:mobile',authenticate, (req,res)=>{


    var mobile = req.params.mobile;
    civilian.find({
        mobile:mobile,
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
app.get('/querysearch2/:fatherName',authenticate, (req,res)=>{


    var fatherName = req.params.fatherName;
    civilian.find({
        fatherName:fatherName,
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

app.get('/querysearch3/:age',authenticate, (req,res)=>{


    var age= req.params.age;
    civilian.find({
        age:age,
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

app.get('/querysearch4/:gender', authenticate,(req,res)=>{


    var gender = req.params.gender;
    civilian.find({
        gender:gender,
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

app.get('/querysearch5/:profession',authenticate, (req,res)=>{


    var profession = req.params.profession;
    civilian.find({
        profession:profession,
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

app.get('/querysearch6/:village', authenticate,(req,res)=>{


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

app.get('/querysearch7/:block',authenticate, (req,res)=>{


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

app.get('/querysearch8/:district',authenticate, (req,res)=>{


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

app.get('/querysearch9/:state', authenticate,(req,res)=>{


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

app.get('/querysearch10/:mark',authenticate, (req,res)=>{


    var mark = req.params.mark;
    civilian.find({
        mark:mark,
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
    res.status(200).render('querySearch1.hbs', {
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

