document.getElementById("submit").disabled = true;
document.getElementById('otp').disabled = true;
document.getElementById('otpbtn').disabled = true;

function sendOTP(value) {
    var url = 'http://localhost:80/getOTP1/' + value;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        otpR = ourRequest.responseText;
        console.log(otpR);
        document.getElementById('otpbutton').disabled = true;
        document.getElementById('otp').disabled = false;
        document.getElementById('otpbtn').disabled = false;

        setTimeout("document.getElementById('otpbutton').disabled = false;", 60000);


    }
    ourRequest.send();

}
function validateOTP(value) {
    var url = 'http://localhost:80/checkOTP/' + value;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
        var bool = ourRequest.responseText;
        console.log(bool)

        otpVerify(bool);

    }
    ourRequest.send();
}

function otpVerify(boolean) {
    if(boolean === 'true'){
        console.log('if running!')

        document.getElementById("otp").disabled = true;
        document.getElementById("otpbtn").disabled = true;
        document.getElementById("otpbutton").disabled = true;
        $("#mobile").prop("readonly", true);
        document.getElementById("submit").disabled = false;
        document.getElementById('otperror').style.display = "none"

    }
    else{
        document.getElementById('otperror').style.display = "block"


    }

}