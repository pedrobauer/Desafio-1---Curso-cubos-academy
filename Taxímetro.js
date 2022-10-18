const min = 25;
const km = 11.5;
// Output = 1925

let totalMin = 0;
let totalKm = 0;
let total = 0;

if (min <= 20) {
    totalMin = min * 50;
} else if (min > 20) {
    totalMin = (20 * 50) + ((min - 20) * 30);
}
if (km <= 10) {
    totalKm = km * 70;
} else if (km > 10) {
    totalKm = (10 * 70) + ((km - 10) * 50);
}
total = totalKm + totalMin;

console.log(total);