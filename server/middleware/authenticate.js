const {Users} = require('./../models/users');

function authenticate(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    } else {
        var err = new Error('You must be logged in to view this page.');
        err.status = 401;
        return next(err);
    }
}
function authenticated(req, res, next) {
    if (req.session && req.session.userId) {
        res.redirect('/home');
    } else {
        next();
    }
}

module.exports = {authenticate,authenticated};