enum test {"ADMIN", "ADMIN2", "ADMIN3"}

const tryObject = {
    name: "Max",
    age: 35,
    bla: [1, 'qwerty', 50],
    admin: test.ADMIN2
};

const newObj = {
    yo: "Hello",
    another: "test",
    back: 125
}

console.log(tryObject.age, newObj.another, newObj.back);
console.log(tryObject.name);
console.log(tryObject.age);


const arr = ['test1', 'test2', 'test3'];

for (let i of arr) {
    console.log(i.toUpperCase())
}

for (let i of tryObject.bla) {
    console.log(i)
}

const tup: {role: [number, string]} = {
    role: [2, 'test']
}

console.log(typeof(tup));

function printResult(params: number) {
    console.log('Result: ' + params)
}

function add(num1: number, num2: number) {
    return num2 + num1;
}

let strangeFuctions: (a: number, b: number) => number;

strangeFuctions = add;

let t  = strangeFuctions(2, 4);
console.log(t);

function strange2(num1: number, num2: number, cb: (num3: number) => void) {
    const result = num1 + num2;
    cb(result);
}

strange2(4, 5, (res) => {
    console.log(res);
})