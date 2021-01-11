var arr = ['Apple', 'Orange'];
var obj = {
    name: 'Vinicius',
    props: {
        age: 33,
        favoriteColors: ["Red", "Blue"]
    }
};

var age = obj.props.age;

//Destructuring Assignment

var [apple2] = arr;
var {props: { age: age2, favoriteColors: [color1, color2]}} = obj;
 
console.log(color1);

//functions

function sum([a, b] = []) {
    return a + b
}

console.log(sum([5, 5]));