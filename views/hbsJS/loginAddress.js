$(document).ready(function() {

    var countURLAddress = urlFinal + "addressCount"
    console.log(countURLAddress);
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', countURLAddress, true);
    ourRequest.onload = function () {
        var number1 = JSON.parse(ourRequest.responseText);
        printItAddress(number1);
    }
    ourRequest.send();

});

function printItAddress(data){

    document.getElementById('liveCounterBlock').innerHTML = data.blockLength;
document.getElementById('liveCounterVillage').innerHTML = data.villageLength;
document.getElementById('liveCounterVillageToday').innerHTML = data.villageToday;
document.getElementById('liveCounterBlockToday').innerHTML = data.blockToday;

}
