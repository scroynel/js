var clck = document.getElementById('clck');


function summa(a,b){
    a = a || 10;
    b = b || 20;
    alert(a+b);
}


clck.onclick = function(){    //Если нужно вызвать функцию с параметрами по событию, то нужно написать "анонимную функцию"
    summa(1,1);
}
