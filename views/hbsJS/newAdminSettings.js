$(document).ready(function () {



    if(document.getElementById('forMessage').disabled == true){
        $('.disableMessage').prop('disabled', true);
    }
    if(document.getElementById('forPrint').disabled == true){
        $('.disablePrint').prop('disabled', true);
    }
    if(document.getElementById('forMessage').disabled == false){
       var MessageNo =  $( "#forMessage" ).val();

        $("#myRange").attr({
            "max" : MessageNo
        });
    }
    if(document.getElementById('forPrint').disabled == false){
        var printNo =  $( "#forPrint" ).val();

        $("#myRange1").attr({
            "max" : printNo
        });
    }
    if(document.getElementById('forAdminAdd').disabled == true){
        $('.disableAdminAdd').prop('disabled', true);
    }
    if(document.getElementById('forCivilAdd').disabled == true){
        $('.disableCivilAdd').prop('disabled', true);
    }
    if(document.getElementById('forCivilEdit').disabled == true){
        $('.disableCivilEdit').prop('disabled', true);
    }










    $("#districtR").hide();
    $("#villageR").hide();
    $("#blockR").hide();
    $("#stateR").hide();

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



        $("#stateRad").hide();
        $("#districtRad").hide();
        $("#blockRad").hide();

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

        $("#stateRad").hide();
        $("#districtRad").hide();

        $("#stateS").show();
        $("#districtS").show();
        $("#blockS").show();

        $("#stateH").hide();
        $("#districtH").hide();
        $("#blockH").hide();


    } else if (document.getElementById('state').disabled == true && document.getElementById('district').disabled == true) {
        document.getElementById('stateL').disabled = false;
        document.getElementById('districtL').disabled = false;


        $("#stateRad").hide();

        $("#stateH").hide();
        $("#districtH").hide();

        $("#stateS").show();
        $("#districtS").show();


    }
    else if (document.getElementById('state').disabled == true) {
        document.getElementById('stateL').disabled = false;

        $("#stateS").show();
        $("#stateH").hide();

    }




});


function checkRadio() {
    $('#state').prop('selectedIndex',0);
    $('#block').prop('selectedIndex',0);
    $('#village').prop('selectedIndex',0);
    $('#district').prop('selectedIndex',0);
    $('[name="state"]').prop('required',false);
    $('[name="district"]').prop('required',false);
    $('[name="block"]').prop('required',false);
    $('[name="village"]').prop('required',false);


    if($("#stateRadio").is(':checked')){
        $("#districtR").hide();
        $("#villageR").hide();
        $("#blockR").hide();
        $("#stateR").show();
        $('[name="state"]').prop('required',true);
    }

    if($("#districtRadio").is(':checked')) {
        $("#districtR").show();
        $("#villageR").hide();
        $("#blockR").hide();
        $("#stateR").show();
        $('[name="state"]').prop('required',true);
        $('[name="district"]').prop('required',true);


    }

        if($("#villageRadio").is(':checked')) {
            $("#districtR").show();
            $("#villageR").show();
            $("#blockR").show();
            $("#stateR").show();
            $('[name="state"]').prop('required',true);
            $('[name="district"]').prop('required',true);
            $('[name="block"]').prop('required',true);
            $('[name="village"]').prop('required',true);

        }

            if($("#blockRadio").is(':checked')) {
                $("#districtR").show();
                $("#villageR").hide();
                $("#blockR").show();
                $("#stateR").show();
                $('[name="state"]').prop('required',true);
                $('[name="district"]').prop('required',true);
                $('[name="block"]').prop('required',true);
            }

}