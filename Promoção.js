//const precos = [150, 50];
//const precos = [100, 100, 100];
const precos = [200, 150, 50, 100];

function menorValor(precos) {
    let atual = precos[0];
    for (const i of precos) {
        if (i < atual) {
            atual = i
        }
    }
    return atual;
}
function totalprecos(precos) {
    let total = 0;
    for (let i of precos) {
        total += i;
    }
    return total;
}

let total = 0;
if (precos.length < 3) {
    console.log(totalprecos(precos));
} else {
    console.log(totalprecos(precos) - menorValor(precos) + (menorValor(precos) / 2));
}