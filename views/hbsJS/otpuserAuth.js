document.getElementById('otp').disabled = true;
document.getElementById('otpbtn').disabled = true;
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
    var urlCheckMobile = 'https://safe-dawn-33571.herokuapp.com/checkMobile/' + value;
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

    var url = 'https://safe-dawn-33571.herokuapp.com/getOTP1/' + value;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
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
    var url = 'https://safe-dawn-33571.herokuapp.com/checkOTP/' + value;
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
        document.getElementById('otperror').style.display = "none"
        $("#validaitonCheck").val('true');
    }
    else{
        document.getElementById('otperror').style.display = "block"

    }

}