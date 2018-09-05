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
    if (document.getElementById('forAdminBlock').disabled == true){
        $('#authCheckBlock').hide();
    }

});