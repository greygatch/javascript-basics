function numberPlay (str) {

    var num = str.split(":");
    var spex = {};

    spex.sum = (num.map(function(e){return parseInt(e)})).reduce(function(a, b, i, e) {return a + b});
    spex.products = (num.map(function(e){return parseInt(e)})).reduce(function(a, b, i, e) {return a * b});
    spex.avg = spex.sum / num.length;
    spex.stdDev = Math.sqrt((num.map(function(e){return (e * e) - spex.avg;}).reduce(function(a, b, i, e)                {return a + b})) / 2);

    return spex;
}

console.log(numberPlay("7:8:9"));
