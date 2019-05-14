var block = document.getElementById('one');

/*block.onclick = function(){
    this.style.background = 'red';
}*/

// левый клик мышью
/* block.onclick = function(){
    this.style.background = "green";
}
*/

//левый двойной клик мышью
/* block.ondblclick = function(){
    this.style.background = "red";
}
*/


//прый клик мышью
block.oncontextmenu = function(){
    this.style.background = 'black';
    return false; // для запрета контекстного меню
}


// для запрета контекстного меню на всем сайте
document.oncontextmenu = function(){
    return false;
}

// мышь заходит на элемент
/* block.onmouseenter = function(){
    alert('Не заходи сюда');
}
*/



// мышь выходит с элемента
/* block.onmouseleave = function(){
    alert('Молодец');
}
*/

// движение мышью внутри блока
var a = 0;
/* block.onmousemove = function(){
    a++;
    this.style.width = 100 + a + 'px';
}
*/

block.onmousedown = function(event){
    this.style.background = 'cyan';
    console.log('Button: ' + event.button);
    console.log('Which: ' + event.which);

}

block.onmouseup = function(){
    this.style.background = 'pink';
}