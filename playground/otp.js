var secret = speakeasy.generateSecret({length: 6});
var token = speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32'
});

var tokenValidates = speakeasy.totp.verify({
    secret: secret.base32,
    encoding: 'base32',
    token: token,
    window: 6
});
console.log(token,tokenValidates);