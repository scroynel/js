
var date = new Date();


var man = {
    "name" : "Alex",
    "age" : 25,
    "id" : "324234d",
    "sex" : "male"
};

var man2 = {
    "name" : "Alex",
    "age" : 111,
    "id" : "324234d",
    "sex" : "male",
    "year" : function (){
        return date.getFullYear() - this.age; 
    }
};

console.log(man2.year());


/* var a = "name";


console.log(man);
console.log(man["name"]);
console.log(man.name);
console.log(man[a]);*/




var m = {
    "mas" : [4, 45],
    "sum" : function(){
        var sum = 0;
        for(var i=0; i<this.mas.length; i++){
            sum += this.mas[i];
        }
        return sum;
    }
}
console.log(m.sum());