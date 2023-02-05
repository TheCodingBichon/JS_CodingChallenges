// Coding challenge #1
const heightMark = 1.69;
const massMark = 78;
const heightJohn = 1.95;
const massJohn = 92;
const BMIMark = massMark / Math.pow(heightMark, 2);
const BMIJohn = massJohn / Math.pow(heightJohn, 2);
console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn ? "Mark has higher BMI" : "John has higher BMI";
console.log(markHigherBMI);
// Coding challenge #2
//ver 1
let decision;
if (BMIMark > BMIJohn) {
    decision = `Mark has higher BMI ${BMIMark}`;
}
else {
    decision = `John has higher BMI ${BMIJohn}`;
}
console.log(decision);
//ver 2
const markHigherBMI3 = BMIMark > BMIJohn
    ? `Mark has higher BMI ${BMIMark}`
    : `John has higher BMI ${BMIJohn}`;
console.log(markHigherBMI3);
// Coding challenge #3
const dolphinsScore = [96, 108, 89];
const coalasScore = [88, 91, 110];
const calcAvg = function (arr) {
    return arr.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
};
// 1
const avgScoreDolphins = calcAvg(dolphinsScore) / dolphinsScore.length;
const avgScoreCoalas = calcAvg(coalasScore) / coalasScore.length;
// 2
if (avgScoreDolphins > avgScoreCoalas) {
    console.log(`Dolphins won !!!`);
}
else if (avgScoreDolphins < avgScoreCoalas) {
    console.log(`Coalas won !!!`);
}
else if (avgScoreCoalas === avgScoreDolphins) {
    console.log(`Draw !!!`);
}
// 3
if (avgScoreDolphins > avgScoreCoalas && avgScoreDolphins >= 100) {
    console.log(`Dolphins won !!!`);
}
else if (avgScoreDolphins < avgScoreCoalas && avgScoreCoalas >= 100) {
    console.log(`Coalas won !!!`);
}
else if (avgScoreCoalas === avgScoreDolphins &&
    avgScoreCoalas >= 100 &&
    avgScoreDolphins >= 100) {
    console.log(`Both win !!!`);
}
else {
    console.log(`No one wins the trophy !!!`);
}
