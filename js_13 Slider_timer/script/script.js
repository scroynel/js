var polosa = document.getElementById('polosa');
var right = 0;
var left = 0;
var timer;

autoSlider();







function autoSlider(){
    timer = setTimeout(function(){
       
            right = right + 128;
            if(right > 384){
            right = 0;
            clearTimeout(timer);
            }
    polosa.style.right = right + 'px';
    autoSlider();
    
    }, 3000);
    
}