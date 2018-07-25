
$(document).ready(function() {
    var valueState = $("#stateEdit option:selected").val();
    var url = urlFinal+'state/'+valueState;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        addDataToDropdownEdit(ourData.address);
    }
    ourRequest.send();

});

function addDataToDropdownEdit(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("districtEdit").innerHTML = text

}

function getEBlock() {
    console.log('started sadad')
    var valueState = $("#stateEdit option:selected").val();
    var valueDistrict = $("#districtEdit option:selected").text();
    console.log(valueDistrict);
    var url = urlFinal+'district/' + valueDistrict+'/state/'+valueState;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        addDataToDropdownBlockEdit(ourData.address);
        addDataToDropdownBlockEdit1(ourData.address);

    }
    ourRequest.send();
}

function addDataToDropdownBlockEdit(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("blockEdit1").innerHTML = text

}

function addDataToDropdownBlockEdit1(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("blockEdit2").innerHTML = text

}

function editBlock(dist, state, block, editedBlock) {
    console.log(block);
    var url = urlFinal + 'editBlock/'+dist+'/'+state+'/'+block+'/'+editedBlock;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST',url, true);
    ourRequest.onload = function() {
        var ourData = ourRequest.responseText;
        if(ourData === '1') {
            document.getElementById('success2').style.display = "block"
        }
    }
    ourRequest.send();

}

function getEVillage() {
    var valueState = $("#stateEdit option:selected").val();
    var valueDistrict = $("#districtEdit option:selected").text();
    var valueBlock = $("#blockEdit2 option:selected").text();

    var url = urlFinal + 'district/' + valueDistrict+'/state/'+valueState+'/block/'+valueBlock;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        addDataToDropdownVillageEdit(ourData.address);
    }
    ourRequest.send();

}

function addDataToDropdownVillageEdit(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("villageEdit").innerHTML = text

}

function editVillage(dist, state, block, village, editedVillage) {
    console.log(block);
    var url = urlFinal + 'editVillage/'+dist+'/'+state+'/'+block+'/'+village+'/'+editedVillage;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST',url, true);
    ourRequest.onload = function() {
        var ourData = ourRequest.responseText;
        if(ourData === '1') {
            document.getElementById('success3').style.display = "block"
        }
    }
    ourRequest.send();

}