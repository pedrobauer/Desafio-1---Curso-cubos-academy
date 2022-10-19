//const input = "cubos\ncuggbyos";
const input = "cubos\newvelrabsocaeln";

let texto = input.split("\n");
let index = 0;
let palavra = "";

for (letra of texto[1]) {
    if (letra == texto[0][index]) {
        index++;
        palavra += letra;
    }
}
if (palavra == texto[0]) {
    console.log("SIM");
} else {
    console.log("NAO");
}


/*let senhas = input.split("\n")
let confereOrdem = [];
if (senhas[0].length <= (10 ** 3) && senhas[1].length <= (10 ** 5)) {
    for (let i = 0; i < senhas[0].length; i++) {
        for (let j = i; j < senhas[1].length; j++) {
            if (senhas[0][i] == senhas[1][j]) {
                confereOrdem.push(senhas[1][j]);
                break
            }
        }
    }
    if (senhas[0] == confereOrdem.join("")) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }
} else {
    console.log("NAO");
}*/




/*
let senhas = input.split("")

let confereOrdem = [];
for (let i = 0; i < senhas[0].length; i++) {
    for (let j = i; j < senhas[1].length; j++) {
        if (senhas[0][i] == senhas[1][j]) {
            confereOrdem.push(senhas[1][j]);
            break
        }
    }
}
if (senhas[0] == confereOrdem.join("")) {
    console.log("SIM")
} else {
    console.log("NAO")
}

console.log(10 ** 3);
*/

