//const input = "cAPS";
//const input = "LOCK";
//const input = "lock";
//const input = "Lock";
const input = "CAps";
//const input = "CaPS";

let capsOn = false
if (input[0] == input[0].toLowerCase()) {
    //capsOn = true;
    if (input[1] == input[1].toUpperCase()) {
        capsOn = true;
        console.log(`${input[0].toUpperCase()}${restoDaPalavra(input)}`);
    }
    // else {
    //     console.log(`${input[0].toUpperCase()}${restoDaPalavra(input)}`);
    // }
} else if (input[1] == input[1].toUpperCase()) {
    if (input[1] == input[1].toUpperCase()) {
        capsOn = true;
        console.log(`${input[0].toUpperCase()}${restoDaPalavra(input)}`);
    }


    //capsOn = true;
    //console.log(`${input.toLowerCase()}`);
    // else {
    //     console.log(input.toLowerCase());
    // }
}
if (capsOn == false) {
    console.log(input)
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