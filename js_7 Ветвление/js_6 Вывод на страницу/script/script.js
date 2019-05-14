function pushText(){
    var text = document.getElementById('text');
    //text.innerHTML = "Hello";
    //text.innerHTML += " <b>Hello</b>";
    //text.innerText += " <b>Hello</b>";

    //text.insertAdjacentHTML('beforeBegin','Hi');
    //beforeBegin - перед открывающимся тегом
    //afterbegin - после открывающегося тега
    //beforeEnd - перед закрывающимся тегом 
    //afterEnd - после закрывающегося тега

    text.outerHTML = '<div class="super">Hello</div>';

}