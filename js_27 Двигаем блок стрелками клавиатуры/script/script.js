var block = document.getElementById('test');
var left = 0;
var top1 = 0;


document.onkeydown = function(event){
    console.log(event);
    if(event.key == "ArrowRight"){
        left++;
        block.style.left = left + 'px';
    }else if(event.key == "ArrowLeft"){
        left--;
        block.style.left = left + 'px';
    }else if(event.key == "ArrowDown"){
        top1++;
        block.style.top = top1 + 'px';
    }else if(event.key == "ArrowUp"){
        top1--;
        block.style.top = top1 + 'px';
    }else if(event.keyCode == 32){
        left+=20;
        block.style.left = left + 'px';
    }
    
}

document.onkeyup = function(){
    console.log("keyup!");
}