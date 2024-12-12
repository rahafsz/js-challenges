const temperatures = [12, 5, -5, 0, 4];
const printForecast = (arr = []) => {
    let printTemperatures = "..."
    for (let i = 0; i < arr.length; i++) {
        printTemperatures += ` ${arr[i]}ºC in ${i + 1} days ... `
    }
    return printTemperatures
}
console.log(printForecast(temperatures))