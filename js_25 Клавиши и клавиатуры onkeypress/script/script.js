
var test = document.getElementById('test');

test.onkeypress  = function(event){
    //console.log(event.key);
    if(event.keyCode < 48 || event.keyCode > 57){
        console.log('не цифра');
        return false;
    }
}