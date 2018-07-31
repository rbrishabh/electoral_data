$(document).ready(function () {
    document.getElementById('district').disabled = true;
    $("#districtR").hide();
    document.getElementById('village').disabled = true;
    $("#villageR").hide();
    document.getElementById('block').disabled = true;
    $("#blockR").hide();
    document.getElementById('state').disabled = true;
    $("#stateR").hide();
});


function checkRadio() {
    if($("#stateRadio").is(':checked')){
        document.getElementById('district').disabled = true;
        $("#districtR").hide();
        document.getElementById('village').disabled = true;
        $("#villageR").hide();
        document.getElementById('block').disabled = true;
        $("#blockR").hide();
        document.getElementById('state').disabled = false;
        $("#stateR").show();
    }
    if($("#districtRadio").is(':checked')) {
        document.getElementById('district').disabled = false;
        $("#districtR").show();
        document.getElementById('village').disabled = true;
        $("#villageR").hide();
        document.getElementById('block').disabled = true;
        $("#blockR").hide();
        document.getElementById('state').disabled = false;
        $("#stateR").show();
    }
        if($("#villageRadio").is(':checked')) {
            document.getElementById('district').disabled = false;
            $("#districtR").show();
            document.getElementById('village').disabled = false;
            $("#villageR").show();
            document.getElementById('block').disabled = false;
            $("#blockR").show();
            document.getElementById('state').disabled = false;
            $("#stateR").show();
        }
            if($("#blockRadio").is(':checked')) {
                document.getElementById('district').disabled = false;
                $("#districtR").show();
                document.getElementById('village').disabled = true;
                $("#villageR").hide();
                document.getElementById('block').disabled = false;
                $("#blockR").show();
                document.getElementById('state').disabled = false;
                $("#stateR").show();
            }

            }