document.getElementById('otp2').disabled = true;
document.getElementById('otp3').disabled = true;


function sendOTP1(value) {
    var urlCheckMobile = 'https://ems-data.herokuapp.com/checkMobile/' + value;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', urlCheckMobile, true);
    ourRequest.onload = function () {
        goStop = ourRequest.responseText;
        if(goStop == 'go'){
            sendOTPNow(value);
        }
        else{
            document.getElementById('wrongmobile').style.display = "block"
        }
    }
    ourRequest.send();


}
function sendOTP2(value) {
    var urlCheckMobile = 'https://ems-data.herokuapp.com/checkMobile/' + value;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', urlCheckMobile, true);
    ourRequest.onload = function () {
        goStop = ourRequest.responseText;
        if(goStop == 'go'){
            sendOTPNow2(value);
        }
        else{
            document.getElementById('wrongmobile').style.display = "block"
        }
    }
    ourRequest.send();


}

function sendOTPNow(value) {
    document.getElementById('wrongmobile').style.display = "none"

    var url = 'https://ems-data.herokuapp.com/getOTP1/' + value;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
        otpR = ourRequest.responseText;
        console.log(otpR);
        document.getElementById('otpbutton2').disabled = true;
        document.getElementById('otp2').disabled = false;
        $("#secondMobile").prop("readonly", true);

        setTimeout("document.getElementById('otpbutton2').disabled = false;", 60000);


    }
    ourRequest.send();
}
function sendOTPNow2(value) {
    document.getElementById('wrongmobile').style.display = "none"

    var url = 'https://ems-data.herokuapp.com/getOTP1/' + value;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
        otpR = ourRequest.responseText;
        console.log(otpR);
        document.getElementById('otpbutton3').disabled = true;
        document.getElementById('otp3').disabled = false;
        $("#thirdMobile").prop("readonly", true);

        setTimeout("document.getElementById('otpbutton3').disabled = false;", 60000);


    }
    ourRequest.send();
}
