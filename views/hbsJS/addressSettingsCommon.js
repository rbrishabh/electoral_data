
$(document).ready(function() {
    disableIt();
console.log('page runnung')
    function disableIt(){
        document.getElementById('addBlockButton').disabled = true
        document.getElementById('editBlockButton').disabled = true
        document.getElementById('deleteBlockButton').disabled = true
        document.getElementById('addVillageButton').disabled = true
        document.getElementById('editVillageButton').disabled = true
        document.getElementById('deleteVillageButton').disabled = true
    }



});

function disableCheckAB(){
    console.log('dis check runnin   ')
    if(document.getElementById('districtAdd').value){
       valueDistrict =  document.getElementById('districtAdd').value
    }
    else if (document.getElementById('districtAddL').value){
        valueDistrict = document.getElementById('districtAddL').value
    }
    if(document.getElementById('blockAdd1').value){
        valueBlock =  document.getElementById('blockAdd1').value
    }
    else if (document.getElementById('blockAddL').value){
        valueBlock = document.getElementById('blockAddL').value
    }

console.log(valueBlock, valueDistrict, '213')

    //var valueDistrict = $("#districtAdd option:selected").text();
    // var valueBlock = $("#blockAdd1").val();
    if(valueDistrict && valueBlock){
        document.getElementById('addBlockButton').disabled = false;
    }
    else {
        document.getElementById('addBlockButton').disabled = true

    }

}


function disableCheckAV(){

    if(document.getElementById('districtAdd').value){
        valueDistrict =  document.getElementById('districtAdd').value
    }
    else if (document.getElementById('districtAddL').value){
        valueDistrict = document.getElementById('districtAddL').value
    }
    if(document.getElementById('blockAdd2').value){
        valueBlock =  document.getElementById('blockAdd2').value
    }
    else if (document.getElementById('blockAddL1').value){
        valueBlock = document.getElementById('blockAddL1').value
    }
    if(document.getElementById('villageAdd').value){
        valueVillage =  document.getElementById('villageAdd').value
    }
    else if (document.getElementById('villageAddL').value){
        valueVillage = document.getElementById('villageAddL').value
    }

    if(valueDistrict && valueBlock && valueVillage){
        document.getElementById('addVillageButton').disabled = false;
    }
    else {
        document.getElementById('addVillageButton').disabled = true
    }

}

function disableCheckEB(){
console.log('sfaduah')
    if(document.getElementById('districtEdit').value){
        valueDistrict =  document.getElementById('districtEdit').value
    }
    else if (document.getElementById('districtEditL').value){
        valueDistrict = document.getElementById('districtEditL').value
    }
    if(document.getElementById('blockEdit1').value){
        valueBlock =  document.getElementById('blockEdit1').value
    }
    else if (document.getElementById('blockEditL').value){
        valueBlock = document.getElementById('blockEditL').value
    }
    
    var valueBlockEdit = $("#blockEdited1").val();

    if(valueDistrict && valueBlock && valueBlockEdit){
        document.getElementById('editBlockButton').disabled = false;
    }
    else {
        document.getElementById('editBlockButton').disabled = true
    }

}

function disableCheckEV(){
    if(document.getElementById('districtEdit').value){
        valueDistrict =  document.getElementById('districtEdit').value
    }
    else if (document.getElementById('districtEditL').value){
        valueDistrict = document.getElementById('districtEditL').value
    }
    if(document.getElementById('blockEdit2').value){
        valueBlock =  document.getElementById('blockEdit2').value
    }
    else if (document.getElementById('blockEditL1').value){
        valueBlock = document.getElementById('blockEditL1').value
    }
    if(document.getElementById('villageEdit').value){
        valueVillage =  document.getElementById('villageEdit').value
    }
    else if (document.getElementById('villageEditL').value){
        valueVillage = document.getElementById('villageEditL').value
    }
    var valueVillageEdit = $("#editedVillage").val();
    if(valueDistrict && valueBlock && valueVillage && valueVillageEdit){
        document.getElementById('editVillageButton').disabled = false;
    }
    else {
        document.getElementById('editVillageButton').disabled = true
    }

}

function disableCheckDB(){
    if(document.getElementById('districtDel').value){
        valueDistrict =  document.getElementById('districtDel').value
    }
    else if (document.getElementById('districtDelL').value){
        valueDistrict = document.getElementById('districtDelL').value
    }
    if(document.getElementById('blockDel1').value){
        valueBlock =  document.getElementById('blockDel1').value
    }
    else if (document.getElementById('blockDelL').value){
        valueBlock = document.getElementById('blockDelL').value
    }



    if(valueDistrict && valueBlock){
        document.getElementById('deleteBlockButton').disabled = false;
    }
    else {
        document.getElementById('deleteBlockButton').disabled = true
    }

}

function disableCheckDV(){
    if(document.getElementById('districtDel').value){
        valueDistrict =  document.getElementById('districtDel').value
    }
    else if (document.getElementById('districtDelL').value){
        valueDistrict = document.getElementById('districtDelL').value
    }
    if(document.getElementById('blockDel2').value){
        valueBlock =  document.getElementById('blockDel2').value
    }
    else if (document.getElementById('blockDelL1').value){
        valueBlock = document.getElementById('blockDelL1').value
    }
    if(document.getElementById('villageDel').value){
        valueVillage =  document.getElementById('villageDel').value
    }
    else if (document.getElementById('villageDelL').value){
        valueVillage = document.getElementById('villageDelL').value
    }

    if(valueDistrict && valueBlock && valueVillage){
        document.getElementById('deleteVillageButton').disabled = false;
    }
    else {
        document.getElementById('deleteVillageButton').disabled = true
    }

}