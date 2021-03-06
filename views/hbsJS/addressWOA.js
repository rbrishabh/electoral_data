
$(document).ready(function() {
    var valueState = $("#state option:selected").val();
    var url = urlFinal+'state/'+valueState;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        addDataToDropdown(ourData.address);
    }
    ourRequest.send();

});




function getBlock() {
    var valueState = $("#state option:selected").val();
    var valueDistrict = $("#district option:selected").text();
    console.log(valueDistrict)
    var url = urlFinal+'district/' + valueDistrict+'/state/'+valueState;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        addDataToDropdownBlock(ourData.address);
    }
    ourRequest.send();
}

function getVillage() {
    var valueState = $("#state option:selected").val();
    var valueDistrict = $("#district option:selected").text();
    var valueBlock = $("#block option:selected").text();

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
    document.getElementById("district").innerHTML = text;
    if(document.getElementById('districtHi').disabled == false){
console.log(document.getElementById('districtHi').value);
        $("#district").val(document.getElementById('districtHi').value);
    }

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