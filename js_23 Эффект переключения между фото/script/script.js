var mySlider = document.getElementById('mySlider');
var two = document.getElementById('two');

mySlider.onmousemove = function(event){
    var x = event.offsetX; // относительно родителя
    console.log(x);
    two.style.width = x + 'px'; 
}

mySlider.onmouseenter = function(){
    two.style.transition = "0s";
}

mySlider.onmouseleave = function(){
    two.style.width = '375px';
    two.style.transition = '.5s';
}