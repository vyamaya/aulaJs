//forma mais extensa utilizada antigamente
/*
function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}
*/


//utilizando rest operator ...
/*
function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5, 5, 5, 2, 3));
*/


//spread operator
/*
const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}
logArgs(...str);
*/

