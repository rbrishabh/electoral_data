
$(document).ready(function() {
    var valueState = $("#stateAdd option:selected").val();
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



function addDataToDropdown(data) {
    text = "";

    text = '<option selected"></option>'
    for(var x in data){
        text = text + '<option>'+data[x]+'</option>'
    }
    document.getElementById("districtAdd").innerHTML = text

}


function addBlock(block, dist, state) {
    console.log(block);
    var url = urlFinal + 'addBlock/'+block+'/'+dist+'/'+state;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST',url, true);
    ourRequest.onload = function() {
         var ourData = ourRequest.responseText;
        if(ourData === '1') {
            getABlock();
            document.getElementById('success').style.display = "block"
        }
    }
    ourRequest.send();

}

function getABlock() {
    var valueState = $("#stateAdd option:selected").val();
    var valueDistrict = $("#districtAdd option:selected").text();
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

function addVillage(village, block, dist, state) {
    console.log(block);
    var url = urlFinal + 'addVillage/'+village+'/'+block+'/'+dist+'/'+state;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST',url, true);
    ourRequest.onload = function() {
        var ourData = ourRequest.responseText;
      if(ourData === '1') {
          getABlock();
          document.getElementById('success1').style.display = "block"
      }
      }
    ourRequest.send();

}
