
$(document).ready(function() {
    if(document.getElementById('state').disabled == true){

        var valueState =  $("[id='stateL']").val()

    }
    else{
        var valueState = $("#state option:selected").val();
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
    if(document.getElementById('state').disabled == true && document.getElementById('district').disabled == true){

        var valueState =  $("[id='stateL']").val()
        var valueDistrict =  $("[id='districtL']").val()

    } else if(document.getElementById('state').disabled == true){
        var valueState =  $("[id='stateL']").val()
        var valueDistrict =  $("[id='district']").val()
    }
     else {
        var valueState = $("#state option:selected").val();
        var valueDistrict = $("#district option:selected").text();
    }

console.log(valueDistrict)
    var url = urlFinal+'district/' + valueDistrict+'/state/'+valueState;
     console.log('asfsdasaasfgeaga', url)
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        getVillage()
        addDataToDropdownBlock(ourData.address);

    }
    ourRequest.send();
}

function getVillage() {
    if(document.getElementById('state').disabled == true && document.getElementById('district').disabled == true && document.getElementById('block').disabled == true){


        var valueState =  $("[id='stateL']").val()
        var valueDistrict =  $("[id='districtL']").val()
        var valueBlock =  $("[id='blockL']").val()
    }
    else if(document.getElementById('state').disabled == true && document.getElementById('district').disabled == true) {
        var valueState = $("[id='stateL']").val()
        var valueDistrict = $("[id='districtL']").val()
        var valueBlock = $("[id='block']").val()
    } else {
        var valueState = $("#state option:selected").val();
        var valueDistrict = $("#district option:selected").text();
        var valueBlock = $("#block option:selected").text();
    }


    var url = urlFinal + 'district/' + valueDistrict+'/state/'+valueState+'/block/'+valueBlock;
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
    document.getElementById("district").innerHTML = text

}
function addDataToDropdownBlock(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("block").innerHTML = text

}

function addDataToDropdownVillage(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("village").innerHTML = text

}