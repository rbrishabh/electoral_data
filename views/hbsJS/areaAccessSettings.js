
$(document).ready(function() {
    console.log('reached hereeresads');
    $("#stateAddS").hide();
    $("#villageAddS").hide();
    $("#blockAddS").hide();
    $("#blockAddS1").hide();
    $("#districtAddS").hide();
    document.getElementById('stateAddL').disabled = true;
    document.getElementById('districtAddL').disabled = true;
    document.getElementById('villageAddL').disabled = true;
    document.getElementById('blockAddL').disabled = true;
    document.getElementById('blockAddL1').disabled = true;
    
    
    $("#stateEditS").hide();
    $("#villageEditS").hide();
    $("#blockEditS").hide();
    $("#blockEditS1").hide();
    $("#districtEditS").hide();
    document.getElementById('stateEditL').disabled = true;
    document.getElementById('districtEditL').disabled = true;
    document.getElementById('villageEditL').disabled = true;
    document.getElementById('blockEditL').disabled = true;
    document.getElementById('blockEditL1').disabled = true;
    
    
    
 $("#stateDelS").hide();
    $("#villageDelS").hide();
    $("#blockDelS").hide();
    $("#blockDelS1").hide();
    $("#districtDelS").hide();
    document.getElementById('stateDelL').disabled = true;
    document.getElementById('districtDelL').disabled = true;
    document.getElementById('villageDelL').disabled = true;
    document.getElementById('blockDelL').disabled = true;
    document.getElementById('blockDelL1').disabled = true;

    if (document.getElementById('stateAdd').disabled == true && document.getElementById('districtAdd').disabled == true && document.getElementById('blockAdd1').disabled == true && document.getElementById('blockAdd2').disabled == true && document.getElementById('villageAdd').disabled == true) {
        document.getElementById('stateAddL').disabled = false;
        document.getElementById('districtAddL').disabled = false;
        document.getElementById('villageAddL').disabled = false;
        document.getElementById('blockAddL').disabled = false;
        document.getElementById('blockAddL1').disabled = false;


        $("#stateAddS").show();
        $("#districtAddS").show();
        $("#blockAddS").show();
        $("#blockAddS1").show();
        $("#villageAddS").show();

        $("#stateAddH").hide();
        $("#districtAddH").hide();
        $("#blockAddH").hide();
        $("#blockAddH1").hide();
        $("#villageAddH").hide();

    }
     else if (document.getElementById('stateAdd').disabled == true && document.getElementById('districtAdd').disabled == true && document.getElementById('blockAdd1').disabled == true&& document.getElementById('blockAdd2').disabled == true) {

        document.getElementById('stateAddL').disabled = false;
        document.getElementById('districtAddL').disabled = false;
        document.getElementById('blockAddL').disabled = false;
        document.getElementById('blockAddL1').disabled = false;

        $("#stateAddS").show();
        $("#districtAddS").show();
        $("#blockAddS").show();
        $("#blockAddS1").show();

        $("#stateAddH").hide();
        $("#districtAddH").hide();
        $("#blockAddH").hide();
        $("#blockAddH1").hide();

    }

     else if (document.getElementById('stateAdd').disabled == true && document.getElementById('districtAdd').disabled == true) {

        document.getElementById('stateAddL').disabled = false;
        document.getElementById('districtAddL').disabled = false;

        $("#stateAddS").show();
        $("#districtAddS").show();

        $("#stateAddH").hide();
        $("#districtAddH").hide();

    }

    else if (document.getElementById('stateAdd').disabled == true) {

        document.getElementById('stateAddL').disabled = false;
        $("#stateAddS").show();
        $("#stateAddH").hide();

    }
    
    
    if (document.getElementById('stateEdit').disabled == true && document.getElementById('districtEdit').disabled == true && document.getElementById('blockEdit1').disabled == true && document.getElementById('blockEdit2').disabled == true && document.getElementById('villageEdit').disabled == true) {
        document.getElementById('stateEditL').disabled = false;
        document.getElementById('districtEditL').disabled = false;
        document.getElementById('villageEditL').disabled = false;
        document.getElementById('blockEditL').disabled = false;
        document.getElementById('blockEditL1').disabled = false;


        $("#stateEditS").show();
        $("#districtEditS").show();
        $("#blockEditS").show();
        $("#blockEditS1").show();
        $("#villageEditS").show();

        $("#stateEditH").hide();
        $("#districtEditH").hide();
        $("#blockEditH").hide();
        $("#blockEditH1").hide();
        $("#villageEditH").hide();

    }
     else if (document.getElementById('stateEdit').disabled == true && document.getElementById('districtEdit').disabled == true && document.getElementById('blockEdit1').disabled == true&& document.getElementById('blockEdit2').disabled == true) {

        document.getElementById('stateEditL').disabled = false;
        document.getElementById('districtEditL').disabled = false;
        document.getElementById('blockEditL').disabled = false;
        document.getElementById('blockEditL1').disabled = false;

        $("#stateEditS").show();
        $("#districtEditS").show();
        $("#blockEditS").show();
        $("#blockEditS1").show();

        $("#stateEditH").hide();
        $("#districtEditH").hide();
        $("#blockEditH").hide();
        $("#blockEditH1").hide();

    }

     else if (document.getElementById('stateEdit').disabled == true && document.getElementById('districtEdit').disabled == true) {

        document.getElementById('stateEditL').disabled = false;
        document.getElementById('districtEditL').disabled = false;

        $("#stateEditS").show();
        $("#districtEditS").show();

        $("#stateEditH").hide();
        $("#districtEditH").hide();

    }

    else if (document.getElementById('stateEdit').disabled == true) {

        document.getElementById('stateEditL').disabled = false;
        $("#stateEditS").show();
        $("#stateEditH").hide();

    }


    if (document.getElementById('stateDel').disabled == true && document.getElementById('districtDel').disabled == true && document.getElementById('blockDel1').disabled == true && document.getElementById('blockDel2').disabled == true && document.getElementById('villageDel').disabled == true) {
        document.getElementById('stateDelL').disabled = false;
        document.getElementById('districtDelL').disabled = false;
        document.getElementById('villageDelL').disabled = false;
        document.getElementById('blockDelL').disabled = false;
        document.getElementById('blockDelL1').disabled = false;


        $("#stateDelS").show();
        $("#districtDelS").show();
        $("#blockDelS").show();
        $("#blockDelS1").show();
        $("#villageDelS").show();

        $("#stateDelH").hide();
        $("#districtDelH").hide();
        $("#blockDelH").hide();
        $("#blockDelH1").hide();
        $("#villageDelH").hide();

    }
    else if (document.getElementById('stateDel').disabled == true && document.getElementById('districtDel').disabled == true && document.getElementById('blockDel1').disabled == true&& document.getElementById('blockDel2').disabled == true) {

        document.getElementById('stateDelL').disabled = false;
        document.getElementById('districtDelL').disabled = false;
        document.getElementById('blockDelL').disabled = false;
        document.getElementById('blockDelL1').disabled = false;

        $("#stateDelS").show();
        $("#districtDelS").show();
        $("#blockDelS").show();
        $("#blockDelS1").show();

        $("#stateDelH").hide();
        $("#districtDelH").hide();
        $("#blockDelH").hide();
        $("#blockDelH1").hide();

    }

    else if (document.getElementById('stateDel').disabled == true && document.getElementById('districtDel').disabled == true) {

        document.getElementById('stateDelL').disabled = false;
        document.getElementById('districtDelL').disabled = false;

        $("#stateDelS").show();
        $("#districtDelS").show();

        $("#stateDelH").hide();
        $("#districtDelH").hide();

    }

    else if (document.getElementById('stateDel').disabled == true) {

        document.getElementById('stateDelL').disabled = false;
        $("#stateDelS").show();
        $("#stateDelH").hide();

    }

});



