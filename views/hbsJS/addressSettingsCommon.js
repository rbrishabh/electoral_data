
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
    var valueDistrict = $("#districtAdd option:selected").text();
    var valueBlock = $("#blockAdd1").val();
    if(valueDistrict && valueBlock){
        document.getElementById('addBlockButton').disabled = false;
    }
    else {
        document.getElementById('addBlockButton').disabled = true

    }

}


function disableCheckAV(){
    var valueDistrict = $("#districtAdd option:selected").text();
    var valueBlock = $("#blockAdd2").val();
    var valueVillage = $("#villageAdd").val();

    if(valueDistrict && valueBlock && valueVillage){
        document.getElementById('addVillageButton').disabled = false;
    }
    else {
        document.getElementById('addVillageButton').disabled = true
    }

}

function disableCheckEB(){
    var valueDistrict = $("#districtEdit option:selected").text();
    var valueBlock = $("#blockEdit1").val();
    var valueBlockEdit = $("#blockEdited1").val();

    if(valueDistrict && valueBlock && valueBlockEdit){
        document.getElementById('editBlockButton').disabled = false;
    }
    else {
        document.getElementById('editBlockButton').disabled = true
    }

}

function disableCheckEV(){
    var valueDistrict = $("#districtEdit option:selected").text();
    var valueBlock = $("#blockEdit2").val();
    var valueVillage = $("#villageEdit").val();
    var valueVillageEdit = $("#editedVillage").val();
    if(valueDistrict && valueBlock && valueVillage && valueVillageEdit){
        document.getElementById('editVillageButton').disabled = false;
    }
    else {
        document.getElementById('editVillageButton').disabled = true
    }

}

function disableCheckDB(){
    var valueDistrict = $("#districtDel option:selected").text();
    var valueBlock = $("#blockDel1").val();


    if(valueDistrict && valueBlock){
        document.getElementById('deleteBlockButton').disabled = false;
    }
    else {
        document.getElementById('deleteBlockButton').disabled = true
    }

}

function disableCheckDV(){
    var valueDistrict = $("#districtDel option:selected").text();
    var valueBlock = $("#blockDel2").val();
    var valueVillage = $("#villageDel").val();


    if(valueDistrict && valueBlock && valueVillage){
        document.getElementById('deleteVillageButton').disabled = false;
    }
    else {
        document.getElementById('deleteVillageButton').disabled = true
    }

}