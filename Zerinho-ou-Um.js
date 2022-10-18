const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 1
    },
    {
        "nome": "Beach",
        "jogada": 0
    }
]

let jogadas0 = [];
let jogadas1 = [];
for (let i of jogadores) {
    if (i.jogada == 0) {
        jogadas0.push(i);
    } else {
        jogadas1.push(i);
    }
}
if (jogadas0.length == 1 && jogadas1.length > 1) {
    console.log(jogadas0[0].nome);
} else if (jogadas1.length == 1 && jogadas0.length > 1) {
    console.log(jogadas1[0].nome);
} else {
    console.log("NINGUEM");
}