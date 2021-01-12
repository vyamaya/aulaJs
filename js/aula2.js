var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Destructuring Assignment

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(tomato, tomato2)



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

console.log(sum([5, 5]));v

