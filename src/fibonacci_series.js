'use strict';

function fibonacci_series(n) {
	var a=0;
	var b = 1;
	var c;
	var i = 0;
    var result = [0];
    while(i++<=n-1){
        c = a;
        a = b;
        result.push(a);
        b+=c;
    }
    return result;
}

module.exports = fibonacci_series;
