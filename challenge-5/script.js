calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
};
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins > avgKoalas && avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins && avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No one wins");
    }
};
checkWinner(avgDolphins, avgKoalas);