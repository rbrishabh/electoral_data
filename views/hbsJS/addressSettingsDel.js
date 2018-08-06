$(document).ready(function() {
    if(document.getElementById('stateDel').value){
        var valueState = $("#stateDel option:selected").val();

    }
    else if (document.getElementById('stateDelL').value){
        valueState = document.getElementById('stateDelL').value
    }
    var url = urlFinal+'state/'+valueState;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        getDBlock()
        addDataToDropdownDel(ourData.address);
    }
    ourRequest.send();

});

function addDataToDropdownDel(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("districtDel").innerHTML = text

}

function getDBlock() {
    console.log('started 324')
    if(document.getElementById('stateDel').value){
        var valueState = $("#stateDel option:selected").val();

    }
    else if (document.getElementById('stateDelL').value){
        valueState = document.getElementById('stateDelL').value
    }
    if(document.getElementById('districtDel').value){
        var valueDistrict = $("#districtDel option:selected").text();
    }
    else if (document.getElementById('districtDelL').value){
        valueDistrict = document.getElementById('districtDelL').value
    }
    console.log(valueDistrict);
    var url = urlFinal+'district/' + valueDistrict+'/state/'+valueState;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        getDVillage()
        addDataToDropdownBlockDel(ourData.address);
        addDataToDropdownBlockDel1(ourData.address);

    }
    ourRequest.send();
}

function addDataToDropdownBlockDel(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("blockDel1").innerHTML = text

}

function addDataToDropdownBlockDel1(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("blockDel2").innerHTML = text

}

function delBlock() {
    if(document.getElementById('stateDel').value){
        var state = $("#stateDel option:selected").val();

    }
    else if (document.getElementById('stateDelL').value){
        state = document.getElementById('stateDelL').value
    }
    if(document.getElementById('districtDel').value){
        var dist = $("#districtDel option:selected").text();
    }
    else if (document.getElementById('districtDelL').value){
        dist = document.getElementById('districtDelL').value
    }
    if(document.getElementById('blockDel1').value){
        var block=  document.getElementById('blockDel1').value
    }
    else if (document.getElementById('blockDelL').value){
        block= document.getElementById('blockDelL').value
    }
    console.log(block);
    var url = urlFinal + 'delBlock/'+block+'/'+dist+'/'+state;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST',url, true);
    ourRequest.onload = function() {
        var ourData = ourRequest.responseText;
        if(ourData === '1') {
            getDBlock();
            getEBlock();
            getABlock();

            document.getElementById('success4').style.display = "block"
        }
    }
    ourRequest.send();

}

function getDVillage() {
    if(document.getElementById('stateDel').value){
        var valueState = $("#stateDel option:selected").val();

    }
    else if (document.getElementById('stateDelL').value){
        valueState = document.getElementById('stateDelL').value
    }
    if(document.getElementById('districtDel').value){
        var valueDistrict = $("#districtDel option:selected").text();
    }
    else if (document.getElementById('districtDelL').value){
        valueDistrict = document.getElementById('districtDelL').value
    }
    if(document.getElementById('blockDel2').value){
        var valueBlock=  document.getElementById('blockDel2').value
    }
    else if (document.getElementById('blockDelL1').value){
        valueBlock= document.getElementById('blockDelL1').value
    }


    var url = urlFinal + 'district/' + valueDistrict+'/state/'+valueState+'/block/'+valueBlock;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        addDataToDropdownVillageDel(ourData.address);
    }
    ourRequest.send();

}

function addDataToDropdownVillageDel(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("villageDel").innerHTML = text

}

function delVillage() {
    if(document.getElementById('stateDel').value){
        var state = $("#stateDel option:selected").val();

    }
    else if (document.getElementById('stateDelL').value){
        state = document.getElementById('stateDelL').value
    }
    if(document.getElementById('districtDel').value){
        var dist = $("#districtDel option:selected").text();
    }
    else if (document.getElementById('districtDelL').value){
        dist = document.getElementById('districtDelL').value
    }
    if(document.getElementById('blockDel2').value){
        var block=  document.getElementById('blockDel2').value
    }
    else if (document.getElementById('blockDelL1').value){
        block= document.getElementById('blockDelL1').value
    }
    if(document.getElementById('villageDel').value){
        var village=  document.getElementById('villageDel').value
    }
    else if (document.getElementById('villageDelL').value){
        village= document.getElementById('villageDelL').value
    }
    console.log(block);
    var url = urlFinal + 'delVillage/'+dist+'/'+state+'/'+block+'/'+village;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST',url, true);
    ourRequest.onload = function() {
        var ourData = ourRequest.responseText;
        if(ourData === '1') {
            console.log('reached here')
            getDBlock();
            getDVillage();
            getEBlock();
            getEVillage();
            getABlock();

            document.getElementById('success5').style.display = "block"
        }
    }
    ourRequest.send();

}