var test = document.getElementById('test');
var str = "";

test.onkeypress = function(event){
    str += event.key;
    console.log(str);

    this.value += String.fromCharCode(getRandomInt(65, 122)); //Если выводить звездочку, то можно сделать так String.fromCharCode(42);
    return false;
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}