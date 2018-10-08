$(document).ready(function () {

    $("#markForm").submit(function (event) {
        console.log('started');
        event.preventDefault();
        var datastring = $("#markForm").serializeArray();
        var dataEdit = JSON.stringify(datastring);
        console.log(dataEdit)
        var url = urlFinal + 'newMarkAdd/?array=' + dataEdit;
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('POST', url, true);
        ourRequest.onload = function(){
            var response = ourRequest.responseText;
            alert(response);

        };




        ourRequest.send();

    });



    $("#deleteAdmin").submit(function (event) {
        console.log('started');
        event.preventDefault();
        var datastring = $("#deleteAdmin").serializeArray();
        var dataEdit = JSON.stringify(datastring);
        console.log(dataEdit)
        var url = urlFinal + 'deleteAdmin/?array=' + dataEdit;
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('POST', url, true);
        ourRequest.onload = function(){
            var response = ourRequest.responseText;
            alert(response);

        };




        ourRequest.send();

    });


    $("#deleteAdminCitizen").submit(function (event) {
        console.log('started');
        event.preventDefault();
        var datastring = $("#deleteAdminCitizen").serializeArray();
        var dataEdit = JSON.stringify(datastring);
        console.log(dataEdit)
        var url = urlFinal + 'deleteAdminCitizen/?array=' + dataEdit;
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('POST', url, true);
        ourRequest.onload = function(){
            var response = ourRequest.responseText;
            alert(response);

        };




        ourRequest.send();

    });



});