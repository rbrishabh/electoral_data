$(document).ready(function() {
    var url = urlFinal+'mark';

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url, true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);

        addDataToDropdownMark(ourData.mark);
    }
    ourRequest.send();
});

function addDataToDropdownMark(mark) {
    text = "";
    text = '<option selected"></option>'
    for(var x in mark){
        text = text + '<option value='+mark[x].value+'>'+mark[x].name+'</option>'
    }
    document.getElementById("mark").innerHTML = text;

}