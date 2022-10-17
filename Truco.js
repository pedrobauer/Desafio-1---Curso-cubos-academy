const carta = "3";
const deck = ["Q", "J", "K", "A", "2", "3"];

//console.log(deck.length)
for (let i = 0; i < deck.length; i++) {
    if (deck[i] == carta) {
        if (i == deck.length - 1) {
            console.log(deck[0]);
        } else {
            console.log(deck[i + 1]);
        }
    }
}
