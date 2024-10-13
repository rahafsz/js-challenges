const person = {
    firstName: "Jonas",
    birthYear: 1991,
    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age //* if I didn't add return statement I can't access to the age when use the method
    },
    job: "Teacher",
    friends: ["Michel", "Peter", "Steven"],
    hasDriversLicense: true,
    getSummery: function () {
        console.log(
            `${this.firstName
            } is a ${this.calcAge()}-years old ${this.job.toLowerCase()}, and he has ${this.hasDriversLicense ? "a" : "no"
            } driver's license.`
        );
    },
};
console.log(
    `${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]} `
);
console.log(person.getSummery());
