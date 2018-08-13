
$(document).ready(function() {
    if(document.getElementById('stateAdd').value){
        var valueState = $("#stateAdd option:selected").val();

    }
    else if (document.getElementById('stateAddL').value){
        valueState = document.getElementById('stateAddL').value
    }
    var url = urlFinal+'state/'+valueState;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.address)
        getABlock();
        addDataToDropdown(ourData.address);
    }
    ourRequest.send();

});



function addDataToDropdown(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("districtAdd").innerHTML = text

}


function addBlock(block) {
    if(document.getElementById('stateAdd').value){
        var state = $("#stateAdd option:selected").val();

    }
    else if (document.getElementById('stateAddL').value){
        state = document.getElementById('stateAddL').value
    }
    if(document.getElementById('districtAdd').value){
        var dist = $("#districtAdd option:selected").text();
    }
    else if (document.getElementById('districtAddL').value){
        dist = document.getElementById('districtAddL').value
    }


    var url = urlFinal + 'addBlock/'+block+'/'+dist+'/'+state;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST',url, true);
    ourRequest.onload = function() {
         var ourData = ourRequest.responseText;
        if(ourData === '1') {
            getABlock();
            getDBlock();
            getEBlock();

            document.getElementById('success').style.display = "block"
            setTimeout(function(){document.getElementById('success').style.display = "none";}, 5000);

        }
    }
    ourRequest.send();

}

function getABlock() {
    console.log('reachedHereee')
    if(document.getElementById('stateAdd').value){
        var valueState = $("#stateAdd option:selected").val();

    }
    else if (document.getElementById('stateAddL').value){
        valueState = document.getElementById('stateAddL').value
    }
    if(document.getElementById('districtAdd').value){
        var valueDistrict = $("#districtAdd option:selected").text();
    }
    else if (document.getElementById('districtAddL').value){
        valueDistrict = document.getElementById('districtAddL').value
    }

    console.log(valueDistrict);
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

function addDataToDropdownBlock(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("blockAdd2").innerHTML = text

}

function addVillage(village) {
    if(document.getElementById('stateAdd').value){
        var state = $("#stateAdd option:selected").val();

    }
    else if (document.getElementById('stateAddL').value){
        state = document.getElementById('stateAddL').value
    }
    if(document.getElementById('districtAdd').value){
        var dist = $("#districtAdd option:selected").text();
    }
    else if (document.getElementById('districtAddL').value){
        dist = document.getElementById('districtAddL').value
    }
    if(document.getElementById('blockAdd2').value){
        var block=  document.getElementById('blockAdd2').value
    }
    else if (document.getElementById('blockAddL1').value){
        block= document.getElementById('blockAddL1').value
    }
    console.log(block);
    var url = urlFinal + 'addVillage/'+village+'/'+block+'/'+dist+'/'+state;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST',url, true);
    ourRequest.onload = function() {
        var ourData = ourRequest.responseText;
      if(ourData === '1') {
          getABlock();
          getDBlock();
          getEBlock();

          document.getElementById('success1').style.display = "block";
          setTimeout(function(){document.getElementById('success1').style.display = "none";}, 5000);
      }
      }
    ourRequest.send();

}
