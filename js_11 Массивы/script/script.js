var m = [],
m1 = ["dsf", 14, 66],
out = document.getElementById('out'),
inp = document.getElementById('i1').value;

m1[3] = "jslgds";
m1[4] = 44;

console.log(m1);

//alert(m1.length);



/*for(var i=0; i<m1.length; i++){
    out.innerHTML += m1[i] + '<br>';
}*/


function masOut(){
    var str = '';

    for(i=0; i<m1.length; i++){
        str += i + ' --- ' + m1[i] + '<br>'
    }

    out.innerHTML = str;
}

masOut();


function f1(){
    inp = document.getElementById('i1').value;
    m1.unshift(inp);
    masOut();
}


function f2(){
    m1.shift();
    masOut();
}