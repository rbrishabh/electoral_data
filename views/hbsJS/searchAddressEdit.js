
$(document).ready(function() {
    if(document.getElementById('stateE').disabled == true){

        var valueState =  $("[id='stateLE']").val()

    }
    else{
        var valueState = $("#stateE option:selected").val();
    }
    var url = urlFinal+'state/'+valueState;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        getEditBlock();
        addDataToDropdownE(ourData.address);
    }
    ourRequest.send();

});




function getEditBlock() {
    if(document.getElementById('stateE').disabled == true && document.getElementById('districtE').disabled == true){

        var valueState =  $("[id='stateLE']").val()
        var valueDistrict =  $("[id='districtLE']").val()

    } else if(document.getElementById('stateE').disabled == true){
        var valueState =  $("[id='stateLE']").val()
        var valueDistrict =  $("[id='districtE']").val()
    }
    else {
        var valueState = $("#stateE option:selected").val();
        var valueDistrict = $("#districtE option:selected").text();
    }

    console.log(valueDistrict)
    var url = urlFinal+'district/' + valueDistrict+'/state/'+valueState;
    console.log('asfsdasaasfgeaga', url)
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        getEditVillage();
        addDataToDropdownBlockE(ourData.address);

    }
    ourRequest.send();
}

function getEditVillage() {
    if(document.getElementById('stateE').disabled == true && document.getElementById('districtE').disabled == true && document.getElementById('blockE').disabled == true){


        var valueState =  $("[id='stateLE']").val()
        var valueDistrict =  $("[id='districtLE']").val()
        var valueBlock =  $("[id='blockLE']").val()
    }
    else if(document.getElementById('stateE').disabled == true && document.getElementById('districtE').disabled == true) {
        var valueState = $("[id='stateLE']").val()
        var valueDistrict = $("[id='districtLE']").val()
        var valueBlock = $("[id='blockE']").val()
    } else {
        var valueState = $("#stateE option:selected").val();
        var valueDistrict = $("#districtE option:selected").text();
        var valueBlock = $("#blockE option:selected").text();
    }


    var url = urlFinal + 'district/' + valueDistrict+'/state/'+valueState+'/block/'+valueBlock;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        addDataToDropdownVillageE(ourData.address);
    }
    ourRequest.send();

}
function addDataToDropdownE(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("districtE").innerHTML = text

}
function addDataToDropdownBlockE(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("blockE").innerHTML = text

}

function addDataToDropdownVillageE(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("villageE").innerHTML = text

}