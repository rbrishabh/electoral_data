$(document).ready(function () {


    if (document.getElementById('forMessage').disabled == true) {
        $('.disableMessage').prop('disabled', true);
    }
    if (document.getElementById('forPrintOthers').disabled == true) {
        $('.disablePrint').prop('disabled', true);
    }
    if (document.getElementById('forMessage').disabled == false) {
        var MessageNo = $("#forMessage").val();

        $("#myRange").attr({
            "max": MessageNo
        });
    }
    if (document.getElementById('forPrintOthers').disabled == false) {
        var printNo = $("#forPrintOthers").val();

        $("#myRange1").attr({
            "max": printNo
        });
    }
    if (document.getElementById('forAdminAdd').disabled == true) {
        $('.disableAdminAdd').prop('disabled', true);
    }
    if (document.getElementById('forEditAdmin').disabled == true) {
        $('.disableAdminEdit').prop('disabled', true);
    }
    if (document.getElementById('forAddressAED').disabled == true) {
        $('.disableAddress').prop('disabled', true);
    }
    if (document.getElementById('forCivilAdd').disabled == true) {
        $('.disableCivilAdd').prop('disabled', true);
    }
    if (document.getElementById('forCivilEdit').disabled == true) {
        $('.disableCivilEdit').prop('disabled', true);
    }

    if (document.getElementById('forBlockAdmin').disabled == true) {
        $('.disableAdminBlock').prop('disabled', true);
    }










    $("#districtREditAdmin").hide();
    $("#villageREditAdmin").hide();
    $("#blockREditAdmin").hide();
    $("#stateREditAdmin").hide();

    $("#stateSEditAdmin").hide();
    $("#villageSEditAdmin").hide();
    $("#blockSEditAdmin").hide();
    $("#districtSEditAdmin").hide();
    document.getElementById('stateLEditAdmin').disabled = true;
    document.getElementById('districtLEditAdmin').disabled = true;
    document.getElementById('villageLEditAdmin').disabled = true;
    document.getElementById('blockLEditAdmin').disabled = true;

    if (document.getElementById('stateEditAdmin').disabled == true && document.getElementById('districtEditAdmin').disabled == true && document.getElementById('blockEditAdmin').disabled == true && document.getElementById('villageEditAdmin').disabled == true) {

        document.getElementById('stateLEditAdmin').disabled = false;
        document.getElementById('districtLEditAdmin').disabled = false;
        document.getElementById('villageLEditAdmin').disabled = false;
        document.getElementById('blockLEditAdmin').disabled = false;



        $("#stateRad").hide();
        $("#districtRad").hide();
        $("#blockRad").hide();

        $("#stateSEditAdmin").show();
        $("#districtSEditAdmin").show();
        $("#blockSEditAdmin").show();
        $("#villageSEditAdmin").show();

        $("#stateHEditAdmin").hide();
        $("#districtHEditAdmin").hide();
        $("#blockHEditAdmin").hide();
        $("#villageHEditAdmin").hide();


    } else if (document.getElementById('stateEditAdmin').disabled == true && document.getElementById('districtEditAdmin').disabled == true && document.getElementById('blockEditAdmin').disabled == true) {
        document.getElementById('stateLEditAdmin').disabled = false;
        document.getElementById('districtLEditAdmin').disabled = false;
        document.getElementById('blockLEditAdmin').disabled = false;

        $("#stateRad").hide();
        $("#districtRad").hide();

        $("#stateSEditAdmin").show();
        $("#districtSEditAdmin").show();
        $("#blockSEditAdmin").show();

        $("#stateHEditAdmin").hide();
        $("#districtHEditAdmin").hide();
        $("#blockHEditAdmin").hide();


    } else if (document.getElementById('stateEditAdmin').disabled == true && document.getElementById('districtEditAdmin').disabled == true) {
        document.getElementById('stateLEditAdmin').disabled = false;
        document.getElementById('districtLEditAdmin').disabled = false;


        $("#stateRad").hide();

        $("#stateHEditAdmin").hide();
        $("#districtHEditAdmin").hide();

        $("#stateSEditAdmin").show();
        $("#districtSEditAdmin").show();


    }
    else if (document.getElementById('stateEditAdmin').disabled == true) {
        document.getElementById('stateLEditAdmin').disabled = false;

        $("#stateSEditAdmin").show();
        $("#stateHEditAdmin").hide();

    }

 checkRadio();
});

function checkRadio() {
    $('#stateEditAdmin').prop('selectedIndex',0);
    $('#blockEditAdmin').prop('selectedIndex',0);
    $('#villageEditAdmin').prop('selectedIndex',0);
    $('#districtEditAdmin').prop('selectedIndex',0);
    $('[name="state"]').prop('required',false);
    $('[name="district"]').prop('required',false);
    $('[name="block"]').prop('required',false);
    $('[name="village"]').prop('required',false);


    if($("#stateRadio").is(':checked')){
        $("#districtREditAdmin").hide();
        $("#villageREditAdmin").hide();
        $("#blockREditAdmin").hide();
        $("#stateREditAdmin").show();
        $('[name="state"]').prop('required',true);
    }

    if($("#districtRadio").is(':checked')) {
        $("#districtREditAdmin").show();
        $("#villageREditAdmin").hide();
        $("#blockREditAdmin").hide();
        $("#stateREditAdmin").show();
        $('[name="state"]').prop('required',true);
        $('[name="district"]').prop('required',true);


    }

    if($("#villageRadio").is(':checked')) {
        $("#districtREditAdmin").show();
        $("#villageREditAdmin").show();
        $("#blockREditAdmin").show();
        $("#stateREditAdmin").show();
        $('[name="state"]').prop('required',true);
        $('[name="district"]').prop('required',true);
        $('[name="block"]').prop('required',true);
        $('[name="village"]').prop('required',true);

    }

    if($("#blockRadio").is(':checked')) {
        $("#districtREditAdmin").show();
        $("#villageREditAdmin").hide();
        $("#blockREditAdmin").show();
        $("#stateREditAdmin").show();
        $('[name="state"]').prop('required',true);
        $('[name="district"]').prop('required',true);
        $('[name="block"]').prop('required',true);
    }

}