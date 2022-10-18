//lista = [12, 16, 62, 27];
//lista = [12, 16, 14, 0];
lista = [12, 0, 100, 0];
//lista = [12, 18, 27];

let maiorIdade = 0;
let temMaiorDeIdade = false;

for (const j of lista) {
    if (j > maiorIdade) {
        maiorIdade = j;
    }
}
//console.log(maiorIdade)
let menorMaior = maiorIdade;
for (const i of lista) {
    if (i >= 18) {
        if (i <= menorMaior) {
            menorMaior = i;
        }
        temMaiorDeIdade = true;
    }
}
if (temMaiorDeIdade == false) {
    console.log("CRESCA E APARECA");
} else if (maiorIdade >= 18) {
    console.log(menorMaior);
}