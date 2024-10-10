const bills = [125, 555, 44];
const tips = [];
const total = [];
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
bills.forEach((bill) => {
    const tip = calcTip(bill);
    tips.push(tip);
    total.push(tip + bill);
});
