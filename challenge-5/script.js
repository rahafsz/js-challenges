calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
};
const avgDolhins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins > avgKoalas && avgDolhins >= avgKoalas * 2) {
        console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolhins && avgKoalas >= avgDolhins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    } else {
        console.log("No one wins");
    }
};
checkWinner(avgDolhins, avgKoalas);
