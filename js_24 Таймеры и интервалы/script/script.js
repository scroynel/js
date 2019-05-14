var test = document.getElementById('test');
var btn = document.getElementById('btn');
var m_left = 0;

//move();

/* 
var timer = setInterval(function(){
    m_left += 20;
    test.style.marginLeft = m_left + 'px';
    console.log(test.getBoundingClientRect().x);
    if(test.getBoundingClientRect().x > screen.width - 50){
        m_left = 0;
    }
},300)

btn.onclick = function(){
    clearInterval(timer);
}
*/
var timer;  

function move(){
    m_left += 1;
    test.style.marginLeft = m_left + 'px';
    timer = setTimeout(move, 40);
}

btn.onclick = function(){
    clearTimeout(timer);
}



var out = document.getElementById('out');
var a = 10;
countDown();
function countDown(){
    out.innerHTML = a;
    a--;
    if(a<0){
        clearTimeout(timer);
        alert('Timer is off')
    }else{
        timer = setTimeout(countDown, 1000);
    }
    
}


