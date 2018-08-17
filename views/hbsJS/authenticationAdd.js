$(document).ready(function() {
    if (document.getElementById('forAddData').disabled == true){
        $('#authCheckAdd').hide();
    }
    if (document.getElementById('forAddAdmin').disabled == true){
        $('#authCheckAddUser').hide();
    }
    if (document.getElementById('forAddress').disabled == true){
        $('#authCheckAddress').hide();
    }

});