const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let sum = 0;

const calcTip = (bill) =>
    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const calcTotal = (bill, tip) => totals.push(bill + tip);

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    calcTotal(bills[i], tips[i]);
}

const calcAverage = (arr) => {
    const total = arr.length;
    for (let i = 0; i < total; i++) {
        sum += arr[i];
    }
    return sum / total;
};

console.log(calcAverage(totals));
