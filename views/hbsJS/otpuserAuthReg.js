$(document).ready(function () {
    document.getElementById('otherOcc').disabled = true;

});








function sendOTP(value) {
    var urlCheckMobile = urlFinal+'checkMobileReg/' + value;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', urlCheckMobile, true);
    ourRequest.onload = function () {
        goStop = ourRequest.responseText;
        if(goStop == 'go'){
            console.log('yo babe')
            sendOTPNowReg(value);

        }

    }
    ourRequest.send();


}

function sendOTPNowReg(value) {


    var url = urlFinal+'getOTPReg/' + value;

    var ourRequest = new XMLHttpRequest();
    console.log('runnin hereeee', value)
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
        otpR = ourRequest.responseText;
        console.log(otpR);
        document.getElementById('otpbutton').disabled = true;

        $("#mobile").prop("readonly", true);

        setTimeout("document.getElementById('otpbutton').disabled = false;", 60000);


    }
    ourRequest.send();
}