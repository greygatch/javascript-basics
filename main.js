<<<<<<< HEAD
function numberPlay (str) {

    var num = str.split(":");
    var spex = {};

    spex.sum = (num.map(function(e){return parseInt(e)})).reduce(function(a, b, i, e) {return a + b});
    spex.products = num.reduce(function(a, b, i, e) {return a * b});
    spex.avg = spex.sum / num.length;
    spex.stdDev = Math.sqrt((num.map(function(e){return (e * e) - spex.avg;}).reduce(function(a, b, i, e) {return a + b})) / 2);

    return spex;
}

var inp = prompt("Give me a number. (ex: n:n:n )");
numberPlay(inp);
=======
var a = parseInt(prompt("gimme an int, dawg: "));
var b = parseInt(prompt("gimme an another int: "));
var c = prompt("do what with em? (+, -, *, /)");

if (c === "+" || c === "-"){
  c === "+" ? alert(a + b) : alert (a - c);
}
else if (c === "*" || c === "/") {
  c === "*" ? alert(a * b) : alert(a / b);
}
>>>>>>> a00e84dbc6c1f43ede0d9b8642faf24fc8910259
