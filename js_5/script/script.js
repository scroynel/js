

function plus(){
    var num1 = document.getElementById('n1').value,
    num2 = document.getElementById('n2').value,
    rslt = document.getElementById('rslt');

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var result = num1 + num2;
    rslt.innerHTML = result;
    console.log(num1);
    console.log(num2);

    
}

function minus(){
    var num1 = document.getElementById('n1').value,
    num2 = document.getElementById('n2').value,
    rslt = document.getElementById('rslt');

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var result = num1 - num2;
    rslt.innerHTML = result;
    console.log(num1);
    console.log(num2);

    
}

function multiply(){
    var num1 = document.getElementById('n1').value,
    num2 = document.getElementById('n2').value,
    rslt = document.getElementById('rslt');

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var result = num1 * num2;
    rslt.innerHTML = result;
    console.log(num1);
    console.log(num2);

    
}

function devide(){
    var num1 = document.getElementById('n1').value,
    num2 = document.getElementById('n2').value,
    rslt = document.getElementById('rslt');

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if(num2 == 0){
        result = 0
    }else{
        var result = num1 / num2;
        rslt.innerHTML = result;
    }
    
    console.log(num1);
    console.log(num2);

    
}


/*function plus(){
    var num1, num2, rslt, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    rslt = document.getElementById('rslt');
    rslt.innerHTML = result;

}*/
