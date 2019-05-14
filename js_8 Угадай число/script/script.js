    var progNum = document.getElementById('progNum'),
    randomNum = Math.floor((Math.random() * 10)+1); 
    progNum.innerHTML = randomNum;

function f1(){
    var myNum = document.getElementById('myNum').value,
    out = document.getElementById('out'),
    
    myNum = parseInt(myNum);
    
    if(myNum == randomNum){
        out.innerHTML = 'Вы угадали!';
    }else if(myNum>randomNum){
        out.innerHTML = 'Вы ввели число больше';
    }else{
        out.innerHTML = 'Вы ввели число меньше, чем нужно';
    }
}
    