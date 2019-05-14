var r1 = document.getElementById('r1').oninput = cssGenerator,
test = document.getElementById('test'),
textarea = document.getElementById('out');

function cssGenerator(){
    test.style.borderRadius = this.value + 'px';
    textarea.innerHTML = '-webkit-border-radius: ' + this.value + 'px;\n';
    textarea.innerHTML += 'border-radius: ' + this.value + 'px;';
}