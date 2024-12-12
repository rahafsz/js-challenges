const data = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const analystWeekWork = (arr = []) => {
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let totalHoursWork = arr.reduce((acc, curr) => acc + curr, 0);
    const average = totalHoursWork / 7;
    const maxWorkHour = Math.max(...arr);
    const maxWorkDay = daysOfWeek[arr.indexOf(maxWorkHour)];
    const workDays = arr.filter((e) => e !== 0).length;
    const isFullTime = totalHoursWork >= 35;

    return {
        totalHoursWork,
        average,
        maxWorkDay,
        workDays,
        isFullTime,
    };
};
console.log(analystWeekWork(data));
