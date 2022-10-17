// const min = 2;
// const max = 10;
// const valores = [0, 5, 6, 10, 11];
const min = 1;
const max = 1;
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let permitido = [];
for (let i of valores) {
    if (i >= min && i <= max) {
        permitido.push(i)
    }
}
console.log(permitido)