
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
        getEditRightBlock();
        addDataToDropdownER(ourData.address);
    }
    ourRequest.send();

});




function getEditRightBlock() {
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
        console.log(ourData.address)
        getEditRightVillage();
        addDataToDropdownBlockER(ourData.address);

    }
    ourRequest.send();
}

function getEditRightVillage() {
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
        var valueState = $("#stateEditAdmin option:selected").val();
        var valueDistrict = $("#districtEditAdmin option:selected").text();
        var valueBlock = $("#blockEditAdmin option:selected").text();
    }
    valueState = 'Uttarakhand'
    console.log(valueState,valueBlock,valueDistrict);

    var url = urlFinal + 'district/' + valueDistrict+'/state/'+valueState+'/block/'+valueBlock;
    console.log(url,'bi')
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        addDataToDropdownVillageER(ourData.address);
    }
    ourRequest.send();

}
function addDataToDropdownER(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("districtEditAdmin").innerHTML = text

}
function addDataToDropdownBlockER(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("blockEditAdmin").innerHTML = text

}

function addDataToDropdownVillageER(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("villageEditAdmin").innerHTML = text

}