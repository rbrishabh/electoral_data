$(document).ready(function() {
    var valueState = $("#stateDel option:selected").val();
    var url = urlFinal+'state/'+valueState;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
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
    var valueState = $("#stateDel option:selected").val();
    var valueDistrict = $("#districtDel option:selected").text();
    console.log(valueDistrict);
    var url = urlFinal+'district/' + valueDistrict+'/state/'+valueState;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
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

function delBlock(block, dist, state) {
    console.log(block);
    var url = urlFinal + 'delBlock/'+block+'/'+dist+'/'+state;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST',url, true);
    ourRequest.onload = function() {
        var ourData = ourRequest.responseText;
        if(ourData === '1') {
            getDBlock();
            document.getElementById('success4').style.display = "block"
        }
    }
    ourRequest.send();

}

function getDVillage() {
    var valueState = $("#stateDel option:selected").val();
    var valueDistrict = $("#districtDel option:selected").text();
    var valueBlock = $("#blockDel2 option:selected").text();

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

function delVillage(block, dist, state , village) {
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
            document.getElementById('success5').style.display = "block"
        }
    }
    ourRequest.send();

}