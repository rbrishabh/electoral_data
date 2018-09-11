$(document).ready(function() {
    if (document.getElementById('forCivilAdd').disabled == true){
        $('#authCheckAdd').hide();
    }
    if (document.getElementById('forAdminAdd').disabled == true){
        $('#authCheckAddUser').hide();
    }
    if (document.getElementById('forAddressAED').disabled == true){
        $('#authCheckAddress').hide();
    }
    
    if (document.getElementById('forRequest').disabled == true){
            $('#authCheckRequest').hide();
    }

});


function messageRequest() {
    console.log('messageReqStart');
    var url = urlFinal + 'newMessageRequest';
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.send();

}

function printRequest() {
    console.log('printReqStart');
    var url = urlFinal + 'newPrintRequest';
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.send();
}