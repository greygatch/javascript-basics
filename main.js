var a = parseInt(prompt("gimme an int, dawg: "));
var b = parseInt(prompt("gimme an another int: "));
var c = prompt("do what with em? (+, -, *, /)");

if (c === "+"){
  alert(a + b);
}
else if (c === "-") {
  alert(a - b);
}

else if (c === "*") {
  alert(a * b);
}
else {
  alert(a / b);
}
