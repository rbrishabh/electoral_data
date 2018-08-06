
$(document).ready(function() {

    document.getElementById('stateL').disabled = true;
    document.getElementById('districtL').disabled = true;
    document.getElementById('villageL').disabled = true;
    document.getElementById('blockL').disabled = true;

    if (document.getElementById('state').disabled == true && document.getElementById('district').disabled == true && document.getElementById('block').disabled == true && document.getElementById('village').disabled == true) {
        document.getElementById('stateL').disabled = false;
        document.getElementById('districtL').disabled = false;
        document.getElementById('villageL').disabled = false;
        document.getElementById('blockL').disabled = false;



    } else if (document.getElementById('state').disabled == true && document.getElementById('district').disabled == true && document.getElementById('block').disabled == true) {

        document.getElementById('stateL').disabled = false;
        document.getElementById('districtL').disabled = false;
        document.getElementById('blockL').disabled = false;

    } else if (document.getElementById('state').disabled == true && document.getElementById('district').disabled == true) {

        document.getElementById('stateL').disabled = false;
        document.getElementById('districtL').disabled = false;


    }
    else if (document.getElementById('state').disabled == true) {

        document.getElementById('stateL').disabled = false;

    }


});



