var polosa = document.getElementById('polosa');
var right = 0;
var left = 0;
var timer;

autoSlider();


function sliderRight(){
    right = right + 128;
    if(right > 384){
        right = 0;
    }
    polosa.style.right = right + 'px';
    
}

function sliderLeft(){
    right = right - 128;
    if(right < 0){
        right = 384;
    }
    polosa.style.right = right + 'px';
}


function autoSlider(){
    timer = setInterval(sliderRight, 3000);
    
}