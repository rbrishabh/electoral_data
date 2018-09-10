
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
        //console.log(ourData.address)
        getBlockEdit();
        addDataToDropdownEdit(ourData.address);
    }
    ourRequest.send();

});




function getBlockEdit() {
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

    //console.log(valueDistrict)
    var url = urlFinal+'district/' + valueDistrict+'/state/'+valueState;
    //console.log('asfsdasaasfgeaga', url)
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        //console.log(ourData.address);
        getVillageEdit();
        addDataToDropdownBlockEdit(ourData.address);

    }
    ourRequest.send();
}

function getVillageEdit() {
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
    //console.log(url);
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        //console.log(ourData.address)
        addDataToDropdownVillageEdit(ourData.address);
    }
    ourRequest.send();

}
function addDataToDropdownEdit(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("districtEditAdmin").innerHTML = text

}
function addDataToDropdownBlockEdit(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("blockEditAdmin").innerHTML = text

}

function addDataToDropdownVillageEdit(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("villageEditAdmin").innerHTML = text

}