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

});