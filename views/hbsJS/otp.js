jQuery(function ($) {
    var $inputs = $('input[name=password],input[name=enterotp]');
    $inputs.on('input', function () {
        // Set the required property of the other input to false if this input is not empty.
        $inputs.not(this).prop('required', !$(this).val().length);
    });
});

function otpShow(value){
    var x = document.getElementById("otpbox");
    if (x.style.display === "none" && $('#checkboxLogin').is(':checked')) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


    if ($('#checkboxLogin').is(':checked')) {


        var url = 'https://safe-dawn-33571.herokuapp.com/getNumber/' + value;

        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET',url, true);
        ourRequest.onload = function() {
            otpR = JSON.parse(ourRequest.responseText);
if(otpR.message == "Incorrect Email!"){
    document.getElementById('otperror').style.display = "block"
    document.getElementById("login_button").disabled = true;
}
             else{
    setTimeout("document.getElementById('resendOTP').disabled = false;", 60000);
    document.getElementById("password").disabled = true;
    //document.getElementById("email").disabled = true;
    document.getElementById('otperror').style.display = "none"
    document.getElementById("login_button").disabled = false;


}
            console.log(otpR);
            }
        ourRequest.send();

        }

    if (!$('#checkboxLogin').is(':checked')) {
        document.getElementById("password").disabled = false;
    }
    }

    function ResendOTP() {
     otpShow();
 }






