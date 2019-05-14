function f1(){
    var num1 = document.getElementById('num1').value,
    out = document.getElementById('out');

    num1 = parseInt(num1);

    if(num1 == 100){
        out.innerHTML = "Число равно 100";
    }else if(num1 < 100){
        out.innerHTML = "Число меньше 100";
    }else{
        out.innerHTML = "Число больше 100";
    }
}