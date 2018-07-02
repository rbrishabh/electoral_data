array = [];
outputObj = {};
mainObj = {};
sortArray= {};
i=1;
function showCivilian(str,id,num) {
    if(array.length === 0) {
        array.push(num);

    }
     if (str == "") {
        document.getElementById(id).innerHTML = "";
        return;
    }
    else if(array.length===1)
    {
        array.push(str);
        array.push(id);
        http(str,num);
    }
    else if(array.length===3&&array[1]===$('#'+array[2]).val()){
    sort(str,num);
     }
     else {
        array.length = 0;
        outputObj = {};
        mainObj = {};
        showCivilian(str,id,num);
     }
       }

    function http(urlString, num) {
    if (num===0){
        var url = 'http://localhost:3000/querysearch0/' + urlString;
        
    }
        if (num===1){
            var url = 'http://localhost:3000/querysearch1/' + urlString;
            
        }
        if (num===2){
            var url = 'http://localhost:3000/querysearch2/' + urlString;
            
        }
        if (num===3){
            var url = 'http://localhost:3000/querysearch3/' + urlString;
            
        }
        if (num===4){
            var url = 'http://localhost:3000/querysearch4/' + urlString;
            
        }
        if (num===5){
            var url = 'http://localhost:3000/querysearch5/' + urlString;
            
        }
        if (num===6){
            var url = 'http://localhost:3000/querysearch6/' + urlString;
            
        }
        if (num===7){
            var url = 'http://localhost:3000/querysearch7/' + urlString;
            
        }
        if (num===8){
            var url = 'http://localhost:3000/querysearch8/' + urlString;
            
        }
        if (num===9){
            var url = 'http://localhost:3000/querysearch9/' + urlString;
            
        }
        if (num===10){
            var url = 'http://localhost:3000/querysearch10/' + urlString;
            
        }



        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET',url, true);
        ourRequest.onload = function() {
            var ourData = JSON.parse(ourRequest.responseText);
            print(ourData);
            outputObj = ourData;
            mainObj = ourData;

        }
        ourRequest.send();

        };


function sort(str,num) {
    var civilianData = mainObj.civilian;

    console.log('sort started', mainObj.civilian, num, str);
    if (num===0){

       sortArray.name = str;

    }
    if (num===1){
        sortArray.mobile = str;
    }
    if (num===2){
        sortArray.fatherName = str;
    }
    if (num===3){
        sortArray.age = str;
    }
    if (num===4){
        sortArray.gender = str;

    }
    if (num===5){
        sortArray.profession = str;
    }
    if (num===6){
        sortArray.village = str;
    }
    if (num===7){
        sortArray.block = str;
    }
    if (num===8){
        sortArray.district = str;
    }
    if (num===9){
        sortArray.state = str;
    }
    if (num===10){
        sortArray.mark = str;;
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

    var txt = "<table class='table table-bordered' border='1'><tbody>" +
        "<tr>"+"<th>" + "<b>S No.</b>" + "</th>"+
        "<th>" + "<b>Name</b>" + "</th>"
        + "<th>" + "<b>Mark</b>" + "</th>"
        + "<th>" + "<b>Father's Name</b>" + "</th>"
        + "<th>" + "<b>Age</b>" + "</th>"
        + "<th>" + "<b>Gender"+ "</th>"
        + "<th>" + "Profession"+ "</th>"
        + "<th>" + "Village"+ "</th>"
        + "<th>" + "Block"+ "</th>"
        + "<th>" + "District"+ "</th>"
        + "<th>" + "State"+ "</th>"
        + "<th>" + "Mobile"+ "</th>"
        + "<th>" + "Checkbox</b>"+ "</th></tr>"
    for (var x in printData.civilian) {

        txt = txt + "<tr>"+ "<th>" + i + "</th>"+
            "<th>" + printData.civilian[x].name + "</th>"
            + "<th>" + printData.civilian[x].mark + "</th>"
            + "<th>" + printData.civilian[x].fatherName + "</th>"
            + "<th>" + printData.civilian[x].age + "</th>"
            + "<th>" + printData.civilian[x].gender + "</th>"
            + "<th>" + printData.civilian[x].profession+ "</th>"
            + "<th>" + printData.civilian[x].village+ "</th>"
            + "<th>" + printData.civilian[x].block+ "</th>"
            + "<th>" + printData.civilian[x].district+ "</th>"
            + "<th>" + printData.civilian[x].state+ "</th>"
            + "<th id='num'>" + printData.civilian[x].mobile + "</th>"
            + "<th>" + "<input type='checkbox'>" + "</th>"+"</tr><br><br><input type='button' name='checkbox' id='messagebtn' class='btn btn-success center-block' value='Send Message'>";

        i++
    }

    txt += "</tbody></table></div>"

    document.getElementById("opTable").innerHTML = txt;

        }




