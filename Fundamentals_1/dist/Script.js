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
