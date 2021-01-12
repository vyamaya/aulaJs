// Symbols

const uniqueId = Symbol();

//console.log(uniqueId);

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

//console.log(arr[Symbol.iterator]().next());

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator](){
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i]; 
        }
    }
};

for (let value of obj) {
    console.log(value);
}