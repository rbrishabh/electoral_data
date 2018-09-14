$(document).ready(function() {

    var countURL = urlFinal + "notification"
    console.log(countURL);
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', countURL, true);
    ourRequest.onload = function () {
        var number = JSON.parse(ourRequest.responseText);
        printNoti(number)
    }
    ourRequest.send();

});


function printNoti(data) {
    document.getElementById('messageNoti').innerHTML = data.messageNoti;
    document.getElementById('printNoti').innerHTML = data.printNoti;
    document.getElementById('mobileReqCount').innerHTML = " "+data.mobileReqCount;
    document.getElementById('messageReqCount').innerHTML = " "+data.messageReqCount;
}