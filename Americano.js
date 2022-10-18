//const numeros = [1, 3, 2, 1];
// const numeros = [1, 1, 1];
const numeros = [5, 5, 5, 5];

function somaNumeros(numeros) {
    let s = 0
    for (const i of numeros) {
        s += i;
    }
    return s;
}
//console.log(somaNumeros(numeros))
if (somaNumeros(numeros) == numeros.length) {
    console.log(somaNumeros(numeros));
} else if (somaNumeros(numeros) % numeros.length <= numeros.length && somaNumeros(numeros) % numeros.length > 0) {
    console.log(somaNumeros(numeros) % numeros.length);
} else if (somaNumeros(numeros) % numeros.length == 0) {
    console.log(numeros.length);
}



