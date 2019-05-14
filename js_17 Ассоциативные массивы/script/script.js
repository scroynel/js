//var m = [4, 4, 'dsgsdg'];
//console.log(m);
var out = document.getElementById('out');
var m = {};
var n = {
    "one" : 44,
    "hello" : "world",
    "prim" : 2000,
    "double key" : 777
};


n.one = 9000;   
console.log(n.prim);
console.log(n.one);
//console.log(n.double key); Error, получать только через квадратные скобки
console.log(n["double key"]);

var ppp = "hello";
//n.ppp; Error, будет искоть в массиве "n" ключ "ppp"
console.log(n[ppp]);


for(var key in n){
    out.innerHTML += key + ' ----- ' + n[key] + '<br>';
}