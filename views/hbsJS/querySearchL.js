array = [];
outputObj = {};
mainObj = {};
sortArray= {};
i=1;
ageSort = {};
ageArray = [];


$(document).ready(function() {
   var state =  $("[name='state']").val()
   var district =  $("[name='district']").val()
   var block =  $("[name='block']").val()
   var village = $("[name='village']").val()
console.log(village)
    if(district==="" || district == null){
       district = "00"
    }
    if(block==="" || block == null){
       block="00"
    }
    if(village==="" || village == null){
       village="00"
    }
    var url = 'http://localhost:80/initialSearch/state/' + state + '/district/' + district + '/block/' + block + '/village/' + village;
console.log(url)
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log('started uttarakhand')
        print(ourData);
        outputObj = ourData;
        mainObj = ourData;

    }
    ourRequest.send();

});




function querySearch(state, district, block, village, pin, firstName, middleName, lastName, relationName, relationMiddle, relationLast, minage, maxage, occ, occother, mobile, email, gender, mark) {
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
    if(relationName===""){
        relationName = "00"
    }
    if(relationMiddle===""){
        relationMiddle = "00"
    }
    if(relationLast===""){
        relationLast = "00"
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
    var url = 'http://localhost:80/buttonSearch/' + state + '/' + district + '/' + block + '/' + village + '/' + pin + '/' + firstName + '/' + middleName + '/' + lastName + '/' + relationName + '/' + relationMiddle + '/' + relationLast + '/' + minage + '/' + maxage + '/' + occ + '/' + occother + '/' + mobile + '/' + email + '/' + gender + '/' + mark;
    console.log(url)
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log('button')
        print(ourData);
        outputObj = ourData;
        mainObj = ourData;
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
    print(outputObj);

}




function print(printData) {
i=1;
    var txt = "<table class='table table-bordered' id='result' border='1'><tbody>" +
        "<tr>"+"<th>" + "<b>S No.</b>" + "</th>"+
        "<th>" + "<b>First Name</b>" + "</th>"
        +"<th>" + "<b>Middle Name</b>" + "</th>"
        +"<th>" + "<b>Last Name</b>" + "</th>"
        +"<th>" + "<b>Relation</b>" + "</th>"
        + "<th>" + "<b>Relation's Name</b>" + "</th>"
        +"<th>" + "<b>R Middle Name</b>" + "</th>"
        +"<th>" + "<b>R Last NAme</b>" + "</th>"
        + "<th>" + "<b>Mark</b>" + "</th>"
        + "<th>" + "<b>Age</b>" + "</th>"
        + "<th>" + "<b>Gender"+ "</th>"
        + "<th>" + "Profession"+ "</th>"
        + "<th>" + "(Other)"+ "</th>"
        + "<th>" + "Village"+ "</th>"
        + "<th>" + "Block"+ "</th>"
        + "<th>" + "District"+ "</th>"
        + "<th>" + "State"+ "</th>"
        + "<th>" + "<b>Pin Code</b>" + "</th>"
        + "<th>" + "Mobile"+ "</th>"
        + "<th>" + "Secondary Mobile"+ "</th>"
        + "<th>" + "Third Mobile"+ "</th>"
        + "<th>" + "<b>Email</b>" + "</th>"
        + "<th>" + "<b>Select</b>" + "</th>"

        + "</b></tr>"
    for (var x in printData.civilian) {
if(printData.civilian[x].name== undefined){
    printData.civilian[x].name ="";
}
        if(printData.civilian[x].middleName== undefined){
            printData.civilian[x].middleName ="";
        }
        if(printData.civilian[x].lastName== undefined){
            printData.civilian[x].lastName ="";
        }
        if(printData.civilian[x].relation== undefined){
            printData.civilian[x].relation ="";
        }
        if(printData.civilian[x].relationName== undefined){
            printData.civilian[x].relationName ="";
        }
        if(printData.civilian[x].relationMiddle== undefined){
            printData.civilian[x].relationMiddle ="";
        }
        if(printData.civilian[x].relationLast== undefined){
            printData.civilian[x].relationLast ="";
        }
        if(printData.civilian[x].mark== undefined){
            printData.civilian[x].mark ="";
        }
        if(printData.civilian[x].age== undefined || printData.civilian[x].age== null){
            printData.civilian[x].age ="";
        }
        if(printData.civilian[x].gender== undefined){
            printData.civilian[x].gender ="";
        }
        if(printData.civilian[x].profession== undefined){
            printData.civilian[x].profession ="";
        }
        if(printData.civilian[x].occother== undefined){
            printData.civilian[x].occother ="";
        }
        if(printData.civilian[x].village== undefined){
            printData.civilian[x].village ="";
        }
        if(printData.civilian[x].block== undefined){
            printData.civilian[x].block ="";
        }
        if(printData.civilian[x].district== undefined){
            printData.civilian[x].district ="";
        }
        if(printData.civilian[x].state== undefined){
            printData.civilian[x].state ="";
        }
        if(printData.civilian[x].pin== undefined || printData.civilian[x].pin== null){
            printData.civilian[x].pin ="";
        }
        if(printData.civilian[x].mobile== undefined || printData.civilian[x].mobile== null){
            printData.civilian[x].mobile ="";
        }
        if(printData.civilian[x].secondMobile== undefined || printData.civilian[x].secondMobile== null){
            printData.civilian[x].secondMobile ="";
        }
        if(printData.civilian[x].thirdMobile== undefined || printData.civilian[x].thirdMobile== null){
            printData.civilian[x].thirdMobile ="";
        }
        if(printData.civilian[x].email== undefined){
            printData.civilian[x].email ="";
        }
        txt = txt + "<tr>"+ "<th>" + i + "</th>"
            +"<th>" + printData.civilian[x].name + "</th>"
            + "<th>" + printData.civilian[x].middleName + "</th>"
            +"<th>" + printData.civilian[x].lastName + "</th>"
            + "<th>" + printData.civilian[x].relation + "</th>"
            + "<th>" + printData.civilian[x].relationName + "</th>"
            +  "<th>" + printData.civilian[x].relationMiddle + "</th>"
            + "<th>" + printData.civilian[x].relationLast + "</th>"
            + "<th>" + printData.civilian[x].mark + "</th>"
            + "<th>" + printData.civilian[x].age + "</th>"
            + "<th>" + printData.civilian[x].gender + "</th>"
            + "<th>" + printData.civilian[x].profession+ "</th>"
            + "<th>" + printData.civilian[x].occother+ "</th>"
            + "<th>" + printData.civilian[x].village+ "</th>"
            + "<th>" + printData.civilian[x].block+ "</th>"
            + "<th>" + printData.civilian[x].district+ "</th>"
            + "<th>" + printData.civilian[x].state+ "</th>"
            + "<th>" + printData.civilian[x].pin+ "</th>"
            + "<th>" + printData.civilian[x].mobile + "</th>"
            + "<th>" + printData.civilian[x].secondMobile + "</th>"
            + "<th>" + printData.civilian[x].thirdMobile + "</th>"
            + "<th>" + printData.civilian[x].email + "</th>"
            + "<th>" + "<input type='checkbox' data-value = "+ printData.civilian[x].mobile + "-"+ printData.civilian[x].name+ "-"+ printData.civilian[x].middleName+ "-"+ printData.civilian[x].lastName +">" + "</th>"

            +"</tr>";

        i++
    }

    txt += "</tbody></table></div>"
    document.getElementById("opTable").innerHTML = txt;
    document.getElementById("messageButton").innerHTML = '<button class="btn btn-success pull-right" data-toggle="modal" data-target="#myModal" id="msgbtn">Message</button>' +
        '<button class="btn btn-success pull-right" onclick="printData()">Print</button>';
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
                var url = 'http://localhost:80/message?array='+listInput+'&message='+text;
                console.log(url)
                var ourRequest = new XMLHttpRequest();
                ourRequest.open('GET', url, true);
                ourRequest.send();
                listInput= [];
            }
            e.preventDefault();
        });
    });
}

function printData() {
    var divToPrint = document.getElementById('opTable');
    var htmlToPrint = '' +
        '<style type="text/css">' +

      '  #opTable {'+
        ' border-collapse: collapse;' +
    '}'
    +
        'table th, table td {' +


    'border:1px solid #000;' +
        'padding;0.5em;' +
        '}' +
        'table td:last-child {display:none}'+
    'table th:last-child {display:none}'+
        '</style>';
    htmlToPrint += divToPrint.outerHTML;
    newWin = window.open("");
    newWin.document.write(htmlToPrint);
    newWin.print();
    newWin.close();
}



