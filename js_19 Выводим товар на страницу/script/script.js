var goods = {
    "28292" : {
        "name" : "Банан",
        "cost" : 30,
        "img" : "https://cdn3.iconfinder.com/data/icons/fruits-8/512/banana-256.png",
        "sklad" : "да"
    },
    "23729" : {
        "name" : "Помидор",
        "cost" : 40,
        "img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
        "sklad" : "нет"
    },
    "23345" : {
        "name" : "Клубника",
        "cost" : 50,
        "img" : "https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Strawberry-128.png",
        "sklad" : "да"
    }
};

console.log(goods);

var divOut = document.getElementById('out');

var out = '';
for(var key in goods){
    out += 'Название: ' + goods[key].name + '<br>';
    out += 'Цена: ' + goods[key].cost + '<br>';
    out += 'Наличие на складе: ' + goods[key].sklad + '<br>';
    out += '<img src="' + goods[key].img + '">';
    out += '<hr>';
 }

divOut.innerHTML = out;