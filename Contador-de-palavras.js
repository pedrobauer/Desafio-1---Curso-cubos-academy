//const texto = "Um texto qualquer";
//let texto = "      Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ";
let texto = "      Cuidado, pois usuarios      as vezes deixam espacos vazios no fim do texto sem querer ";

const palavras = texto.trim().split(" ");
let palavrasTratadas = [];
for (const i of palavras) {
    if (i != "") {
        palavrasTratadas.push(i);
    }
}
console.log(palavrasTratadas.length);


// const palavras = texto.trim().split(" ");
// console.log(palavras.length);


// let textoTratado = texto.trim();
// const palavras = textoTratado.split(" ");
// console.log(palavras.length);