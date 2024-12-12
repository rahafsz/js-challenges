// const dolphinsAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;
// console.log(dolphinsAverage, koalasAverage);
// if (dolphinsAverage > koalasAverage) {
//     console.log("Dolphins win the trophy");
// } else if (dolphinsAverage < koalasAverage) {
//     console.log("Koalas win the trophy");
// } else if (dolphinsAverage === koalasAverage) {
//     console.log("Both win the trophy");
// }

// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 123) / 3;
// console.log(dolphinsAverage, koalasAverage);
// if ((dolphinsAverage > koalasAverage) && (dolphinsAverage >= 100)) {
//     console.log("Dolphins win the trophy");
// } else if ((dolphinsAverage < koalasAverage) && (koalasAverage >= 100)) {
//     console.log("Koalas win the trophy");
// } else if (dolphinsAverage === koalasAverage) {
//     console.log("Both win the trophy");
// }

const dolphinsAverage = (97 + 112 + 10) / 3;
const koalasAverage = (97 + 2 + 101) / 3;
console.log(dolphinsAverage, koalasAverage);
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("Dolphins win the trophy");
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log("Koalas win the trophy");
} else if (
    dolphinsAverage === koalasAverage &&
    dolphinsAverage >= 100 &&
    koalasAverage >= 100
) {
    console.log("Both win the trophy");
} else {
    console.log("No one wins the trophy");
}
