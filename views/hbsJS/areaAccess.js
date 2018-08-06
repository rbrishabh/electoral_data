
$(document).ready(function() {
    console.log('reached hereeresads');
    $("#stateS").hide();
    $("#villageS").hide();
    $("#blockS").hide();
    $("#districtS").hide();
    document.getElementById('stateL').disabled = true;
    document.getElementById('districtL').disabled = true;
    document.getElementById('villageL').disabled = true;
    document.getElementById('blockL').disabled = true;

    if (document.getElementById('state').disabled == true && document.getElementById('district').disabled == true && document.getElementById('block').disabled == true && document.getElementById('village').disabled == true) {
        document.getElementById('stateL').disabled = false;
        document.getElementById('districtL').disabled = false;
        document.getElementById('villageL').disabled = false;
        document.getElementById('blockL').disabled = false;



        $("#stateS").show();
        $("#districtS").show();
        $("#blockS").show();
        $("#villageS").show();

        $("#stateH").hide();
        $("#districtH").hide();
        $("#blockH").hide();
        $("#villageH").hide();


    } else if (document.getElementById('state').disabled == true && document.getElementById('district').disabled == true && document.getElementById('block').disabled == true) {

        document.getElementById('stateL').disabled = false;
        document.getElementById('districtL').disabled = false;
        document.getElementById('blockL').disabled = false;

        $("#stateS").show();
        $("#districtS").show();
        $("#blockS").show();

        $("#stateH").hide();
        $("#districtH").hide();
        $("#blockH").hide();


    } else if (document.getElementById('state').disabled == true && document.getElementById('district').disabled == true) {

        document.getElementById('stateL').disabled = false;
        document.getElementById('districtL').disabled = false;

        $("#stateS").show();
        $("#districtS").show();

        $("#stateH").hide();
        $("#districtH").hide();

    }
    else if (document.getElementById('state').disabled == true) {

        document.getElementById('stateL').disabled = false;
        $("#stateS").show();
        $("#stateH").hide();

    }


});



