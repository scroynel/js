

/* При создании img в html 

var cat = document.getElementById('cat');


document.onmousemove = function(event){
    cat.style.position = 'fixed';
    cat.style.left = event.clientX + 10 + 'px';
    cat.style.top = event.clientY + 10 + 'px';
}

*/



var body = document.getElementsByTagName('body')[0];

document.onmousemove = function(){
    body.insertAdjacentHTML('beforeEnd', '<img src="./images/cat.png" id="cat">');
    var cat = document.getElementById('cat');
    cat.style.position = 'fixed';

    document.onmousemove = function(event){
        cat.style.left = event.clientX + 10 + 'px';
        cat.style.top = event.clientY + 10 + 'px';
    }
}

