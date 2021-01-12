// Symbols

const uniqueId = Symbol();

//console.log(uniqueId);

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

//console.log(arr[Symbol.iterator]().next());

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const arr2 = [...obj];
console.log(arr2)


//Generators

function* hello() {
    console.log('Hello');
    yield 1;
    console.log('From');
    yield 2;
    console.log('Function');
}

const it = hello();

console.log(it.next())
console.log(it.next())
console.log(it.next())


function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}


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
