
$(document).ready(function() {
    if(document.getElementById('stateEditAdmin').disabled == true){

        var valueState =  $("[id='stateLEditAdmin']").val()

    }
    else{
        var valueState = $("#stateEditAdmin option:selected").val();
    }
    var url = urlFinal+'state/'+valueState;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        getBlock();
        addDataToDropdown(ourData.address);
    }
    ourRequest.send();

});




function getBlock() {
    if(document.getElementById('stateEditAdmin').disabled == true && document.getElementById('districtEditAdmin').disabled == true){

        var valueState =  $("[id='stateLEditAdmin']").val()
        var valueDistrict =  $("[id='districtLEditAdmin']").val()

    } else if(document.getElementById('stateEditAdmin').disabled == true){
        var valueState =  $("[id='stateLEditAdmin']").val()
        var valueDistrict =  $("[id='districtEditAdmin']").val()
    }
    else {
        var valueState = $("#stateEditAdmin option:selected").val();
        var valueDistrict = $("#districtEditAdmin option:selected").text();
    }

    console.log(valueDistrict)
    var url = urlFinal+'district/' + valueDistrict+'/state/'+valueState;
    console.log('asfsdasaasfgeaga', url)
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address);
        getVillage();
        addDataToDropdownBlock(ourData.address);

    }
    ourRequest.send();
}

function getVillage() {
    if(document.getElementById('stateEditAdmin').disabled == true && document.getElementById('districtEditAdmin').disabled == true && document.getElementById('blockEditAdmin').disabled == true){


        var valueState =  $("[id='stateLEditAdmin']").val()
        var valueDistrict =  $("[id='districtLEditAdmin']").val()
        var valueBlock =  $("[id='blockLEditAdmin']").val()
    }
    else if(document.getElementById('stateEditAdmin').disabled == true && document.getElementById('districtEditAdmin').disabled == true) {
        var valueState = $("[id='stateLEditAdmin']").val()
        var valueDistrict = $("[id='districtLEditAdmin']").val()
        var valueBlock = $("[id='blockEditAdmin']").val()
    } else {
        var valueState = $("#stateLEditAdmin").val();
        var valueDistrict = $("#districtEditAdmin option:selected").text();
        var valueBlock = $("#blockEditAdmin option:selected").text();
    }


    var url = urlFinal + 'district/' + valueDistrict+'/state/'+valueState+'/block/'+valueBlock;
    console.log(url);
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        addDataToDropdownVillage(ourData.address);
    }
    ourRequest.send();

}
function addDataToDropdown(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("districtEditAdmin").innerHTML = text

}
function addDataToDropdownBlock(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("blockEditAdmin").innerHTML = text

}

function addDataToDropdownVillage(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("villageEditAdmin").innerHTML = text

}