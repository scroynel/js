var radio = document.getElementsByName('change'),
one = document.getElementById('one');

for(var i=0; i<radio.length; i++){
    radio[i].onchange = testRadio;
}

function testRadio(){
    console.log(this.value);

}

one.onclick = checkRadio;

function checkRadio(){
    var m = document.getElementsByName('change');
    for(var i=0; i<m.length; i++){
        if(m[i].checked){
            alert(m[i].value);
            break;

        }
    }
}