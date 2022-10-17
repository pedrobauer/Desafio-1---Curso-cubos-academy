//const input = "cAPS";
//const input = "lock";
//const input = "Lock";
//const input = "LOCK";
const input = "CAps";
//const input = "CaPS";


if (input[0] == input[0].toLowerCase()) {
    if (input[1] == input[1].toLowerCase()) {
        console.log(input.toLowerCase());
    } else {
        console.log(`${input[0].toUpperCase()}${restoDaPalavra(input)}`);
    }
} else {
    if (input[1] == input[1].toLowerCase()) {
        console.log(`${input[0]}${restoDaPalavra(input)}`);
    } else {
        console.log(input.toLowerCase());
    }
}

function restoDaPalavra(input) {
    let resto = [];
    for (let i = 1; i < input.length; i++) {
        resto.push(input[i])
    }
    return resto.join("").toLowerCase();
}


//console.log(restoDaPalavra(palavra));

// for (let i of palavra) {
//     if
// }


// if () {

// } else {
//     console.log(palavra)
// }