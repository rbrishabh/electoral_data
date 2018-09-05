array = [];
outputObj = {};
mainObj = {};
sortArray= {};
i=1;
ageSort = {};
ageArray = [];









function printToEdit (value){
    var url = urlFinal + 'valueForEdit1/'+value
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData,'rthg')
        printingToEdit(ourData.civilian[0]);
    }
    ourRequest.send();
}
function printToEditRights (value){

    document.getElementById('emailRights').value=value;
}



function printToEditRights (value){

    document.getElementById('emailRights').value=value;
}



function printingToEdit(value) {
    console.log(value)
    $('#editForm').trigger("reset");
    if(value.name){
        document.getElementById('nameEdit').value=value.name;
    }
    if(value.lastName){
        document.getElementById('lastNameEdit').value=value.lastName;
    }if(value.middleName){
        document.getElementById('middleNameEdit').value=value.middleName;
    }
    if(value.relationName){
        document.getElementById('relationNameEdit').value=value.relationName;
    }
    if(value.relationMiddle){
        document.getElementById('relationMiddleEdit').value=value.relationMiddle;
    }
    if(value.relationLast){
        document.getElementById('relationLastEdit').value=value.relationLast
    }
    if(value.mobile){
        document.getElementById('mobileEdit').value=value.mobile;
    }
    if(value.relation){
        if(value.relation==="Father"){
            $("#fatherEdit").prop("checked", true);
        }
        if(value.relation==="Mother"){
            $("#motherEdit").prop("checked", true);
        }
        if(value.relation==="Spouse"){
            $("#spouseEdit").prop("checked", true);
        }
    }
    if(value.secondMobile){
        document.getElementById('secondMobileEdit').value=value.secondMobile;
    }
    if(value.thirdMobile){
        document.getElementById('thirdMobileEdit').value=value.thirdMobile;
    }
    if(value.email){
        document.getElementById('emailEdit').value=value.email;
    }
    if(value.notes){
        document.getElementById('notesEdit').value=value.notes;
    }
    if(value.age){
        document.getElementById('ageEdit').value=value.age;
    }
    if(value.occupation){
        $("#otherselect2").val(value.occupation);
        if(value.occupation=="other"){
            document.getElementById('occOtherEdit').disabled = false;
            otherBox2();
        }
    }
    if(value.state){
        $("#stateE").val(value.state);
        $("#stateLE").val(value.state);

    }
    if(value.district){
        $("#districtE").val(value.district);
        $("#districtLE").val(value.district);

    }
    if(value.block){
        console.log(value.block)
        $('#blockE').append($('<option>', {
            value: value.block,
            text: value.block,
            selected: true
        }));

        $("#blockLE").val(value.block);

    }
    if(value.village){
        $('#villageE').append($('<option>', {
            value: value.village,
            text: value.village,
            selected: true
        }));

        $("#villageLE").val(value.village);

    }
    if(value.pin){
        document.getElementById('pinE').value=value.pin;
    }
    if(value.occOther){
        document.getElementById('occOtherEdit').value=value.occOther;
    }
    if(value.mark){

        $("#markEdit").val(value.mark);

    }


}






$(document).ready(function() {



    document.getElementById('occOtherEdit').disabled = true;

    $("#stateS").hide();
    $("#villageS").hide();
    $("#blockS").hide();
    $("#districtS").hide();




    start= 0;
    end = start+20;
    if(document.getElementById('state').disabled == true && document.getElementById('district').disabled == true && document.getElementById('block').disabled == true && document.getElementById('village').disabled == true){
        $("#stateS").show();
        $("#districtS").show();
        $("#blockS").show();
        $("#villageS").show();

        $("#stateH").hide();
        $("#districtH").hide();
        $("#blockH").hide();
        $("#villageH").hide();

        var village = $("[id='villageL']").val()
        var state =  $("[id='stateL']").val()
        var district =  $("[id='districtL']").val()
        var block =  $("[id='blockL']").val()

    } else if(document.getElementById('state').disabled == true && document.getElementById('district').disabled == true && document.getElementById('block').disabled == true){
        $("#stateS").show();
        $("#districtS").show();
        $("#blockS").show();

        $("#stateH").hide();
        $("#districtH").hide();
        $("#blockH").hide();


        var village = $("[id='village']").val()
        var state =  $("[id='stateL']").val()
        var district =  $("[id='districtL']").val()
        var block =  $("[id='blockL']").val()
    } else if(document.getElementById('state').disabled == true && document.getElementById('district').disabled == true){
        $("#stateS").show();
        $("#districtS").show();

        $("#stateH").hide();
        $("#districtH").hide();

        var village = $("[id='village']").val()
        var state =  $("[id='stateL']").val()
        var district =  $("[id='districtL']").val()
        var block =  $("[id='block']").val()
    }
    else if(document.getElementById('state').disabled == true){
        $("#stateS").show();
        $("#stateH").hide();
        var village = $("[id='village']").val()
        var state =  $("[id='stateL']").val()
        var district =  $("[id='district']").val()
        var block =  $("[id='block']").val()
    }





    $("#stateSE").hide();
    $("#villageSE").hide();
    $("#blockSE").hide();
    $("#districtSE").hide();





    if(document.getElementById('stateE').disabled == true && document.getElementById('districtE').disabled == true && document.getElementById('blockE').disabled == true && document.getElementById('villageE').disabled == true){
        $("#stateSE").show();
        $("#districtSE").show();
        $("#blockSE").show();
        $("#villageSE").show();

        $("#stateHE").hide();
        $("#districtHE").hide();
        $("#blockHE").hide();
        $("#villageHE").hide();



    } else if(document.getElementById('stateE').disabled == true && document.getElementById('districtE').disabled == true && document.getElementById('blockE').disabled == true){
        $("#stateSE").show();
        $("#districtSE").show();
        $("#blockSE").show();

        $("#stateHE").hide();
        $("#districtHE").hide();
        $("#blockHE").hide();


    } else if(document.getElementById('stateE').disabled == true && document.getElementById('districtE').disabled == true){
        $("#stateSE").show();
        $("#districtSE").show();

        $("#stateHE").hide();
        $("#districtHE").hide();


    }
    else if(document.getElementById('stateE').disabled == true){
        $("#stateSE").show();
        $("#stateHE").hide();

    }

    console.log(state);
    if(state==="" || state == null){
        state = "00"
    }
    if(district==="" || district == null){
        district = "00"
    }
    if(block==="" || block == null){
        block="00"
    }
    if(village==="" || village == null){
        village="00"
    }
    var url = urlFinal + 'initialSearch4/state/' + state + '/district/' + district + '/block/' + block + '/village/' + village;
    var ourRequest = new XMLHttpRequest();
    console.log(url);
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);


        console.log(ourData);
        start= 0;
        if(ourData.civilian.length>=20){
            end = start + 20;
            outputObj = ourData;
            mainObj = ourData;
            print(ourData);
        }
        else{
            end = ourData.civilian.length;
            y=1;
            outputObj = ourData;
            mainObj = ourData;
            print(ourData);

        }
    };

    ourRequest.send();




    $("#editForm").submit(function(event) {
        event.preventDefault();
        var datastring = $("#editForm").serializeArray();
        var dataEdit = JSON.stringify(datastring);
        var url = urlFinal + 'editFormSubmitUser?array='+dataEdit;
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('POST', url, true);


        document.getElementById("model").style.display = "block";




        ourRequest.send();

    });

    $("#editFormRights").submit(function(event) {
        event.preventDefault();
        var datastring = $("#editFormRights").serializeArray();
        var dataEdit = JSON.stringify(datastring);
        var url = urlFinal + 'editFormRightsSubmitUser?array='+dataEdit;
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('POST', url, true);


        document.getElementById("model").style.display = "block";




        ourRequest.send();

    });


});




function userSearch(pin, firstName, middleName, lastName, minage, maxage, occ, occother, mobile, email, gender, mark) {
    console.log('started rubbbubbb');
    console.log(document.getElementsByName('block')[0].value)
    console.log(document.getElementsByName('block')[1].value, 'asdsadf')

    if(document.getElementsByName('state')[0].value){
        state =  document.getElementsByName('state')[0].value;
    }
    else if (document.getElementsByName('state')[1].value){
        state = document.getElementsByName('state')[1].value;
    } else {
        state = '00'
    }
    if(document.getElementsByName('district')[0].value){
        district =  document.getElementsByName('district')[0].value;
    }
    else if (document.getElementsByName('district')[1].value){
        district = document.getElementsByName('district')[1].value;
    } else  {
        district = '00'
    }
    if(document.getElementsByName('block')[0].value){
        block =  document.getElementsByName('block')[0].value;
        console.log('runninn')

    }
    else if (document.getElementsByName('block')[1].value){
        block = document.getElementsByName('block')[1].value;
        console.log('fkhajfl')

    } else {
        block = '00'
    }
    if(document.getElementsByName('village')[0].value){
        village =  document.getElementsByName('village')[0].value;
    }
    else if (document.getElementsByName('village')[1].value){
        village = document.getElementsByName('village')[1].value;
    } else {
        village = '00'
    }

    if(pin===""){
        pin = "00"
    }
    if(firstName===""){
        firstName = "00"
    }
    if(middleName===""){
        middleName = "00"
    }
    if(lastName===""){
        lastName = "00"
    }

    if(minage===""){
        minage = "00"
    }
    if(maxage===""){
        maxage = "00"
    }
    if(occ==="" || occ == null){
        occ = "00"
    }
    if(occother===""){
        occother = "00"
    }
    if(mobile===""){
        mobile = "00"
    }
    if(email===""){
        email = "00"
    }
    if(gender==="" || gender == null){
        gender = "00"
    }
    if(mark==="" || mark == null){
        mark = "00"
    }
    var url = urlFinal +'buttonSearch4/' + state + '/' + district + '/' + block + '/' + village + '/' + pin + '/' + firstName + '/' + middleName + '/' + lastName + '/'  + minage + '/' + maxage + '/' + occ + '/' + occother + '/' + mobile + '/' + email + '/' + gender + '/' + mark;
    console.log(url)
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);
        start= 0;
        if(ourData.civilian.length>=20){
            end = start + 20;
            y=1;
            print(ourData);
            outputObj = ourData;
            mainObj = ourData;
        }
        else{
            end = ourData.civilian.length;
            y=1;
            outputObj = ourData;
            mainObj = ourData;
            print(ourData);

        }

    }

    ourRequest.send();

}


function sort(str,num) {
    var civilianData = mainObj.civilian;

    console.log('sort started', mainObj.civilian, num, str);
    if (num===0){

        sortArray.state = str;

    }
    if (num===1){
        sortArray.district = str;
    }
    if (num===2){
        sortArray.block = str;
    }
    if (num===3){
        sortArray.village = str;
    }
    if (num===4){
        sortArray.pin = str;

    }
    if (num===5){
        sortArray.name = str;
    }
    if (num===6){
        sortArray.middleName = str;
    }
    if (num===7){
        sortArray.lastName = str;
    }
    if (num===8){
        sortArray.relationName = str;
    }
    if (num===9){
        sortArray.relationMiddle = str;
    }
    if (num===10){
        sortArray.relationLast = str;
    }
    if (num===11){
        ageSort.age = str;
        console.log('reachedhere');
        civilianData= civilianData.filter(function(item) {
            for (var key in ageSort) {
                if (item[key] === undefined || item[key] < ageSort[key])
                    return false;
            }
            return true;
        });
    }
    if (num===12){
        ageSort.age = str;
        console.log('reachedhere');
        civilianData= civilianData.filter(function(item) {
            for (var key in ageSort) {
                if (item[key] === undefined || item[key] > ageSort[key])
                    return false;
            }
            return true;
        });
    }
    if (num===13){
        sortArray.occ = str;
    }
    if (num===14){
        sortArray.occother = str;
    }
    if (num===15){
        sortArray.mobile = str;
    }
    if (num===16){
        sortArray.email = str;
    }
    if (num===17){
        sortArray.gender = str;
    }
    if (num===18){
        sortArray.mark = str;
    }


    civilianData= civilianData.filter(function(item) {
        for (var key in sortArray) {
            if (item[key] === undefined || item[key] != sortArray[key])
                return false;
        }
        return true;
    });


    outputObj.civilian = civilianData;
    start= 0;
    if(outputObj.civilian.length>=20){
        y=1;
        end = start + 20;
        print(outputObj);
    }
    else{
        end = outputObj.civilian.length;
        y=1;
        print(outputObj);

    }

}




function print(printData) {
    var totalPages=  printData.civilian.length/20;
    var pages = Math.ceil(totalPages);

    console.log(pages)
    var txt = "<table class='table table-bordered' id='result' border='1'><tbody>" +
        "<tr>"+"<th>" + "<b>S No.</b>" + "</th>"+
        "<th>" + "<b>Name</b>" + "</th>"

        + "<th>" + "<b>Email</b>" + "</th>"
        + "<th>" + "Mobile"+ "</th>"

        + "<th>" + "Village"+ "</th>"
        + "<th>" + "Block"+ "</th>"
        + "<th>" + "District"+ "</th>"
        + "<th>" + "State"+ "</th>"
        + "<th>" + "History"+ "</th>"
        // + "<th>" + "Block Added Today"+ "</th>"
        // + "<th>" + "Block Added Total"+ "</th>"
        // + "<th>" + "Block Edited Today"+ "</th>"
        // + "<th>" + "Block Edited Total"+ "</th>"+
        // "<th>" + "Village Added Today"+ "</th>"
        // + "<th>" + "Village Added Total"+ "</th>"
        // + "<th>" + "Village Edited Today"+ "</th>"
        // + "<th>" + "Village Edited Total"+ "</th>"
        // + "<th>" + "Citizen Added Today"+ "</th>"
        // + "<th>" + "Citiezen Added Total"+ "</th>"

        + "</b></tr>"

    for (var x=start ;x < end; x++) {


        for(var key in printData.civilian[x]){
            if(!printData.civilian[x][key])
                printData.civilian[x][key] = "-"
        }


        if(printData.civilian[x].name== undefined){
            printData.civilian[x].name ="-";
        }
        if(printData.civilian[x].middleName== undefined){
            printData.civilian[x].middleName ="-";
        }
        if(printData.civilian[x].lastName== undefined){
            printData.civilian[x].lastName ="-";
        }
        if(printData.civilian[x].relation== undefined){
            printData.civilian[x].relation ="-";
        }
        if(printData.civilian[x].relationName== undefined){
            printData.civilian[x].relationName ="-";
        }
        if(printData.civilian[x].relationMiddle== undefined){
            printData.civilian[x].relationMiddle ="-";
        }
        if(printData.civilian[x].relationLast== undefined){
            printData.civilian[x].relationLast ="-";
        }
        if(printData.civilian[x].mark== undefined){
            printData.civilian[x].mark ="-";
        }
        if(printData.civilian[x].age== undefined || printData.civilian[x].age== null){
            printData.civilian[x].age ="-";
        }
        if(printData.civilian[x].gender== undefined){
            printData.civilian[x].gender ="-";
        }
        if(printData.civilian[x].occupation== undefined){
            printData.civilian[x].occupation ="-";
        }
        if(printData.civilian[x].occOther== undefined){
            printData.civilian[x].occOther = "-";
        }
        if(printData.civilian[x].village== undefined){
            printData.civilian[x].village ="-";
        }
        if(printData.civilian[x].block== undefined){
            printData.civilian[x].block ="-";
        }
        if(printData.civilian[x].district== undefined){
            printData.civilian[x].district ="-";
        }
        if(printData.civilian[x].state== undefined){
            printData.civilian[x].state ="-";
        }
        if(printData.civilian[x].pin== undefined || printData.civilian[x].pin== null){
            printData.civilian[x].pin ="-";
        }
        if(printData.civilian[x].mobile== undefined || printData.civilian[x].mobile== null){
            printData.civilian[x].mobile ="-";
        }
        if(printData.civilian[x].secondMobile== undefined || printData.civilian[x].secondMobile== null){
            printData.civilian[x].secondMobile ="-";
        }
        if(printData.civilian[x].thirdMobile== undefined || printData.civilian[x].thirdMobile== null){
            printData.civilian[x].thirdMobile ="-";
        }
        if(printData.civilian[x].email== undefined){
            printData.civilian[x].email ="-";
        }
        txt = txt + "<tr>"+ "<th>" + (x+1) + "</th>"
            +"<th>" + printData.civilian[x].name+" "+printData.civilian[x].middleName+ " "+ printData.civilian[x].lastName + "</th>"
            + "<th>" + printData.civilian[x].email + "</th>"
            + "<th>" + printData.civilian[x].mobile + "</th>"

            + "<th>" + printData.civilian[x].village+ "</th>"
            + "<th>" + printData.civilian[x].block+ "</th>"
            + "<th>" + printData.civilian[x].district+ "</th>"
            + "<th>" + printData.civilian[x].state+ "</th>"
            + "<th>" + "<button class='btn btn-default' title='History' value='"+printData.civilian[x].email  +"' onclick='getHistory(value)' data-toggle='modal' data-target='#his'>View Details</button>" + "</th>"

            // + "<th>" + printData.civilian[x].blockToday+ "</th>"
            // + "<th>" + printData.civilian[x].blockTotal+ "</th>"
            // + "<th>" + printData.civilian[x].blockTodayEdit+ "</th>"
            // + "<th>" + printData.civilian[x].blockTotalEdit+ "</th>" +
            // "<th>" + printData.civilian[x].villageToday+ "</th>"
            // + "<th>" + printData.civilian[x].villageTotal+ "</th>"
            // + "<th>" + printData.civilian[x].villageTodayEdit+ "</th>"
            // + "<th>" + printData.civilian[x].villageTotalEdit+ "</th>"
            // + "<th>" + printData.civilian[x].civilToday+ "</th>"
            // + "<th>" + printData.civilian[x].civilTotal+ "</th>"





            +"</tr>";

        i++
    }




    txt += "</tbody></table></div>"
    document.getElementById("opTable").innerHTML = txt;
    document.getElementById("messageButton").innerHTML =


        '<ul class="pager">'+
        '<span class="text-center" id="pageno"><b>Page '+y+' of ' +pages+'</b></span>'+
        '<li class="previous" id="prevIt"><a class="btn btn-default" onClick="prevIt();">Previous</a></li>'+
        '<li class="next" id="nextIt"><a class="btn btn-default"  onClick="nextIt();">Next</a></li>'+
        '</ul>';

    $(document).ready(function () {

        var listInput = [];
        $('#msgsend').click(function (e) {
            if ($('input[type=checkbox]').is(':checked')) {
                $('input[type=checkbox]').each(function () {
                    if ($(this).is(':checked')) {
                        listInput.push($(this).attr('data-value'));
                    }
                });
                var stringify = JSON.stringify(listInput)
                var text = $('#comment').val();
                console.log($("#forMessage").val());
                if($("#forMessage").val()>=listInput.length){
                    var url = urlFinal + 'message?array='+listInput+'&message='+text;
                    console.log(listInput)
                    var ourRequest = new XMLHttpRequest();
                    ourRequest.open('GET', url, true);
                    ourRequest.onload = function () {
                        var ourData = JSON.parse(ourRequest.responseText);
                        console.log(ourData.messageRights);
                        document.getElementById('forMessage').value=ourData.messageRights;
                        console.log(typeof ourData.messageRights);
                        if(ourData.messageRights===0 || ourData.messageRights === '0'){
                            $('.disableButtonMessage').prop('disabled', true);
                        } else {
                            $('.disableButtonMessage').prop('disabled', false);

                        }

                    }
                    ourRequest.send();
                    listInput= [];
                }
                else{
                    console.log('mess Else runnin');
                    listInput= [];
                    alert('You do not have enough messages left. Please contact the admin for more rights');
                }

            }
            e.preventDefault();
        });

    });

    if(document.getElementById('forMessage').disabled == true){
        $('.disableButton').prop('disabled', true);
    }
    if(document.getElementById('forEditAdmin').disabled == true){
        $('.disableButtonEdit').prop('disabled', true);
    }
    if(document.getElementById('forBlockAdmin').disabled == true){
        $('.disableButtonBlock').prop('disabled', true);
    }
    if(document.getElementById('forPrint').disabled == true){
        $('.disableButtonPrint').prop('disabled', true);
    } else {
        $('.disableButtonPrint').prop('disabled', false);

    }
    if(document.getElementById('forMessage').disabled == true){
        $('.disableButtonMessage').prop('disabled', true);
    } else {
        $('.disableButtonMessage').prop('disabled', false);

    }



    if(end>=printData.civilian.length-1){
        $("#nextIt").hide();
    } else {
        $("#nextIt").show();
    }

    if(start == 0) {
        $("#prevIt").hide();

    } else {
        $("#prevIt").show();
    }
}

function prevIt()
{
    if(start>0){
        y--;
        end = start
        start -= 20;
        console.log(end, start)
        print(outputObj)
    }
}

function nextIt()
{
    if(end+20<outputObj.civilian.length){
        y++;
        start = end;
        end += 20;
        console.log(end, start)
        print(outputObj);
    }
    else if(end!=outputObj.civilian.length){
        y++
        console.log('else r')
        start = end;
        end = outputObj.civilian.length;
        print(outputObj);
        console.log(end, start)
    }

}

function printDec() {
    if($("#forPrint").val()>=1) {
        var url = urlFinal + 'printDecrement';
        console.log(url);
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', url, true);
        ourRequest.onload = function () {
            var ourData = JSON.parse(ourRequest.responseText);
            document.getElementById('forPrint').value = ourData.printRightsL;
            console.log(ourData.printRightsL);
            console.log(typeof ourData.printRightsL);
            if (ourData.printRightsL === 0 || ourData.printRightsL === '0' ) {
                $('.disableButtonPrint').prop('disabled', true);
            } else {
                $('.disableButtonPrint').prop('disabled', false);
            }

        }
        ourRequest.send();
    }
    else {
        $('.disableButtonPrint').prop('disabled', true);
        alert('You do not have enough print rights, please contact the admin.');
    }

}

function printData() {
    if($("#forPrint").val()>=1) {

        var divToPrint = document.getElementById('opTable');
        var htmlToPrint = '' +
            '<style type="text/css">' +

            '  #opTable {' +
            ' border-collapse: collapse;' +
            '}'
            +
            'table th, table td {' +


            'border:1px solid #000;' +
            'padding;0.5em;' +
            '}' +
            'table td:last-child {display:none}' +
            'table th:last-child {display:none}' +
            '</style>';
        htmlToPrint += divToPrint.outerHTML;
        newWin = window.open("");
        newWin.document.write(htmlToPrint);
        newWin.print();
        newWin.close();
    }
    else {
        $('.disableButtonPrint').prop('disabled', true);
        alert('You do not have enough print rights, please contact the admin.');
    }
}



    function getHistory(value) {
        var url = urlFinal + 'getHistory/' + value
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', url, true);
        ourRequest.onload = function () {
            var history = JSON.parse(ourRequest.responseText);
           console.log(history, 'hello ');
            console.log(history.obj.blockTotal);

            $("#abc").val(history.obj.blockTotal);


             $("#civilianToday").innerHTML=history.obj.civilToday;
            $("#civilianTotal").text(history.obj.civilTotal)
            $("#blockToday").text(history.obj.blockToday);
            $("#blockTotal").text(history.obj.blockTotal);
            $("#blockEditedToday").text(history.obj.blockTodayEdit);
            $("#blockEditedTotal").text(history.obj.blockTotalEdit);
            $("#villageTotal").text(history.obj.villageTotal);
            $("#villageToday").text(history.obj.villageToday);
            $("#villageEditedToday").text(history.obj.villageTodayEdit);
            $("#villageEditedTotal").text(history.obj.villageTotalEdit);


        }
        ourRequest.send();
    }



