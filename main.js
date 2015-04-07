var a = prompt('Enter the first number.');
a = parseInt(a);
var b = prompt('Enter an arithmetic operator ( + , - , * or / ).');
var c = prompt('Please enter the second number.');
c = parseInt(c);
var result;
switch (b) {
    case '+':
      result = a + c;
      break;
    case '-':
      result = a - c;
      break;
    case '*':
      result = a * c;
      break;
    case '/':
      result = a / c;
      break;
    default:
      result = undefined;
}
console.log('The result of a', b, 'b is', result);
