function f1(){
    var out = document.getElementById('out');


    var i=0;
    // цикл с заданным кол-вом повторений
    while(i<50){
        // i++; тогда числа будут начинаться с 1, т. к. сначало прибавит 1, а потом выведет
        out.innerHTML += i + ' ';
        i++;
    }


    var j=0;

    do{
        out.innerHTML += j + ' ';
        j++;
    }
    while(j<30)
        
    

}