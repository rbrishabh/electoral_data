
$(document).ready(function() {
    if(document.getElementById('stateEdit').value){
        var valueState = $("#stateEdit option:selected").val();

    }
    else if (document.getElementById('stateEditL').value){
        valueState = document.getElementById('stateEditL').value
    }
    var url = urlFinal+'state/'+valueState;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        getEBlock();
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
    if(document.getElementById('stateEdit').value){
        var valueState = $("#stateEdit option:selected").val();

    }
    else if (document.getElementById('stateEditL').value){
        valueState = document.getElementById('stateEditL').value
    }
    if(document.getElementById('districtEdit').value){
        var valueDistrict = $("#districtEdit option:selected").text();
    }
    else if (document.getElementById('districtEditL').value){
        valueDistrict = document.getElementById('districtEditL').value
    }

    console.log(valueDistrict);
    var url = urlFinal+'district/' + valueDistrict+'/state/'+valueState;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        getEVillage();
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

function editBlock(editedBlock) {
    console.log('dsfjndfjnfjdn')
    if(document.getElementById('stateEdit').value){
        var state = $("#stateEdit option:selected").val();

    }
    else if (document.getElementById('stateEditL').value){
        state = document.getElementById('stateEditL').value
    }
    if(document.getElementById('districtEdit').value){
        var dist = $("#districtEdit option:selected").text();
    }
    else if (document.getElementById('districtEditL').value){
        dist = document.getElementById('districtEditL').value
    }
    if(document.getElementById('blockEdit1').value){
        var block=  document.getElementById('blockEdit1').value
    }
    else if (document.getElementById('blockEditL').value){
        block= document.getElementById('blockEditL').value
    }

    console.log(block);
    var url = urlFinal + 'editBlock/'+dist+'/'+state+'/'+block+'/'+editedBlock;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST',url, true);
    ourRequest.onload = function() {
        var ourData = ourRequest.responseText;
        if(ourData === '1') {
            getEBlock();
            getABlock();
            getDBlock();

            document.getElementById('success2').style.display = "block"
        }
    }
    ourRequest.send();

}

function getEVillage() {

    if(document.getElementById('stateEdit').value){
        var valueState = $("#stateEdit option:selected").val();

    }
    else if (document.getElementById('stateEditL').value){
        valueState = document.getElementById('stateEditL').value
    }
    if(document.getElementById('districtEdit').value){
        var valueDistrict = $("#districtEdit option:selected").text();
    }
    else if (document.getElementById('districtEditL').value){
        valueDistrict = document.getElementById('districtEditL').value
    }
    if(document.getElementById('blockEdit2').value){
        var valueBlock=  document.getElementById('blockEdit2').value
    }
    else if (document.getElementById('blockEditL1').value){
        valueBlock= document.getElementById('blockEditL1').value
    }

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

function editVillage(editedVillage) {
    if(document.getElementById('stateEdit').value){
        var state = $("#stateEdit option:selected").val();

    }
    else if (document.getElementById('stateEditL').value){
        state = document.getElementById('stateEditL').value
    }
    if(document.getElementById('districtEdit').value){
        var dist = $("#districtEdit option:selected").text();
    }
    else if (document.getElementById('districtEditL').value){
        dist = document.getElementById('districtEditL').value
    }
    if(document.getElementById('blockEdit2').value){
        var block=  document.getElementById('blockEdit2').value
    }
    else if (document.getElementById('blockEditL1').value){
        block= document.getElementById('blockEditL1').value
    }
    if(document.getElementById('villageEdit').value){
        var village=  document.getElementById('villageEdit').value
    }
    else if (document.getElementById('villageEditL').value){
        village= document.getElementById('villageEditL').value
    }

    var url = urlFinal + 'editVillage/'+dist+'/'+state+'/'+block+'/'+village+'/'+editedVillage;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST',url, true);
    ourRequest.onload = function() {
        var ourData = ourRequest.responseText;
        if(ourData === '1') {
            getEBlock();
            getEVillage();
            getDVillage();
            getABlock();
            getDBlock();

            document.getElementById('success3').style.display = "block"
        }
    }
    ourRequest.send();

}