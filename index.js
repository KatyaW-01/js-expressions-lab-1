//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work



const day1TempF = 32
const day2TempC = (25 * 9/5) + 32
const day3TempF = 70
const day4TempC = (18 * 9/5) + 32
const day5TempF = 80
const day6TempC = (15 * 9/5) + 32
const day7TempF = 72
const day8TempC = (28 * 9/5) + 32
const day9TempF = 68
const day10TempC = (20 * 9/5) + 32
const day11TempF = 75
const day12TempC = (23 * 9/5) + 32
const day13TempF = 82
const day14TempC = (30 * 9/5) + 32
const day15TempF = 65
const day16TempC = (22 * 9/5) + 32
const day17TempF = 77
const day18TempC = (26 * 9/5) + 32
const day19TempF = 78
const day20TempC = (24 * 9/5) + 32
const day21TempF = 73
const day22TempC = (21 * 9/5) + 32
const day23TempF = 79
const day24TempC = (27 * 9/5) + 32
const day25TempF = 71
const day26TempC = (19 * 9/5) + 32
const day27TempF = 74
const day28TempC = (17 * 9/5) + 32
const day29TempF = 76
const day30TempC = (29 * 9/5) + 32

const fahrenheitTemps = [day1TempF, day3TempF, day5TempF, day7TempF, day9TempF,
    day11TempF, day13TempF, day15TempF, day17TempF, day19TempF,
    day21TempF, day23TempF, day25TempF, day27TempF, day29TempF]

const celciusTemps = [day2TempC, day4TempC, day6TempC, day8TempC, day10TempC,
    day12TempC, day14TempC, day16TempC, day18TempC, day20TempC,
    day22TempC, day24TempC, day26TempC, day28TempC, day30TempC]

let total_fahrenheit = fahrenheitTemps.reduce((acc,temp)=>{
    acc += temp * 1.0
    return acc
},0.0)

let total_celcius = celciusTemps.reduce((acc,temp)=>{
    acc += temp * 1.0
    return acc
},0.0)

let tot_temperature_in_fahrenheit = total_fahrenheit + total_celcius
console.log("tot_temperature_in_fahrenehit:",tot_temperature_in_fahrenheit)

//console.log("tot_temperature_in_celsius",tot_temperature_in_celsius)
function averageTemperature(total_temp,num_temps){
    return total_temp/num_temps
}

let avg_temperature_in_fahrenheit = averageTemperature(tot_temperature_in_fahrenheit,(fahrenheitTemps.length + celciusTemps.length))

console.log(avg_temperature_in_fahrenheit)

let avg_temperature_in_celsius = averageTemperature(total_celcius,celciusTemps.length)

console.log(avg_temperature_in_celsius)

module.exports = {
    tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};
