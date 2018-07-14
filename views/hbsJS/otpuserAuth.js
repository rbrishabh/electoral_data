document.getElementById('otp').disabled = true;
document.getElementById('otherOcc').disabled = true;
document.getElementById('relationLast').disabled = true;
document.getElementById('relationMiddle').disabled = true;
document.getElementById('relationFirst').disabled = true;
document.getElementById('titleAdd').disabled = true;



$(document).ready(function(){
    $('.numeric').numeric();
    $("input[type='radio']").on('change', function () {
        var isChecked = $("[name='optionsRadios']:checked").val() ?true:false;

        console.log(isChecked, 'adsahsdasgd')
        if(isChecked) {
            console.log('if is runnininnn')
            document.getElementById('relationLast').disabled = false;
            document.getElementById('relationMiddle').disabled = false;
            document.getElementById('relationFirst').disabled = false;
            document.getElementById('titleAdd').disabled = false;

        }
    });
});




jQuery(function ($) {
    var $inputs = $('input[name=age],input[name=dob]');
    $inputs.on('input', function () {
        // Set the required property of the other input to false if this input is not empty.
        $inputs.not(this).prop('required', !$(this).val().length);
        console.log('its working!')
    });
});


function sendOTP(value) {
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

function sendOTPNow(value) {
    document.getElementById('wrongmobile').style.display = "none"

    var url = 'https://ems-data.herokuapp.com/getOTP1/' + value;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
        otpR = ourRequest.responseText;
        console.log(otpR);
        document.getElementById('otpbutton').disabled = true;
        document.getElementById('otp').disabled = false;
        $("#mobile").prop("readonly", true);

        setTimeout("document.getElementById('otpbutton').disabled = false;", 60000);


    }
    ourRequest.send();
}

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
