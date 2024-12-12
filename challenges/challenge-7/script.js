const markMiller = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
    },
};
const johnSmith = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
    },
};
markMiller.calcBMI();
johnSmith.calcBMI();
if (markMiller.BMI > johnSmith.BMI) {
    console.log(
        `${markMiller.fullName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.fullName} (${johnSmith.BMI})!`
    );
} else if (johnSmith.BMI > markMiller.BMI) {
    console.log(
        `${johnSmith.fullName}'s BMI (${johnSmith.BMI}) is higher than ${markMiller.fullName} (${markMiller.BMI})!`
    );
} else {
    console.log("They have the same IBM!");
}
