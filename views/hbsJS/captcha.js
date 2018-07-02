
function captcha() {
    var array = [ 'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'J',
        'K',
        'M',
        'N',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z','2','3','4','5', '6','7','8','9']

    arr=[];
    arr1=[];
    arr2=[];
    for(i=0;i<4;i++){
        var letterr = array[Math.floor(Math.random() * array.length)];
        arr.push(letterr);
    }
    arr1 = arr.join("             ")

    document.getElementById("captcha").innerHTML = "<pre class='tab'><h4><b>"+arr1+"</b></h4></pre>";
    arr2 = arr.join("");

}
window.onload = captcha;

function checkCaptcha(str) {
    if (str!==arr2){
 document.getElementById('check').innerHTML = "<input type='button' onclick='WrongCaptcha()' value='Login' class='btn btn-primary pull-right' id='add_data' style='width: 100%'></input>";
        $('input[type="button"]').on("keyenter",function(eve){
            var key = eve.keyCode || eve.which;
            if (key == 13) {
                $(this).click();
            }
            return false;
        });
    } else{
        document.getElementById('check').innerHTML = '<button action="submit" class="btn btn-primary pull-right" id="add_data" style="width: 100%;">Login</button>'

    }
}
function WrongCaptcha() {
    document.getElementById('wrong').innerHTML = "<b>Wrong Captcha. Please try again.</b>"
captcha();
   $("#captchaField").val("");
    $("#password").val("");
    $("#wrongPassword").hide();
}