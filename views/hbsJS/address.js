$(document).ready(function() {
    var url = 'http://safe-dawn-33571.herokuapp.com/state/Uttarakhand';

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
       console.log(ourData.address)
        addDataToDropdown(ourData.address);
    }
    ourRequest.send();

});




function getBlock(valueDistrict, valueState) {
    var url = 'http://safe-dawn-33571.herokuapp.com/district/' + valueDistrict+'/state/'+valueState;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        addDataToDropdownBlock(ourData.address);
    }
    ourRequest.send();

}
function getVillage(valueDistrict, valueState, valueBlock) {
    var url = 'http://safe-dawn-33571.herokuapp.com/district/' + valueDistrict+'/state/'+valueState+'/block/'+valueBlock;
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

    text = '<option value="" selected"></option>'
    for(var x in data){
        text = text + '<option value='+data[x]+'>'+data[x]+'</option>'
    }
    document.getElementById("district").innerHTML = text

}
function addDataToDropdownBlock(data) {
    text = "";

    text = '<option value="" selected"></option>'
    for(var x in data){
        text = text + '<option value='+data[x]+'>'+data[x]+'</option>'
    }
    document.getElementById("block").innerHTML = text

}

function addDataToDropdownVillage(data) {
    text = "";

    text = '<option value="" selected"></option>'
    for(var x in data){
        text = text + '<option value='+data[x]+'>'+data[x]+'</option>'
    }
    document.getElementById("village").innerHTML = text

}