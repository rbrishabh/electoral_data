function sendOTPNowChange(value) {
console.log('started');

    var url = urlFinal + 'getOTP1/' + value;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
        otpR = ourRequest.responseText;
        setTimeout("document.getElementById('otpbutton').disabled = false;", 60000);


    }
    ourRequest.send();
}