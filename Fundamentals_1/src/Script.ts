// Coding challenge #1

const heightMark: number = 1.69;
const massMark: number = 78;

const heightJohn: number = 1.95;
const massJohn: number = 92;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);

const markHigherBMI: string =
  BMIMark > BMIJohn ? "Mark has higher BMI" : "John has higher BMI";

console.log(markHigherBMI);

// Coding challenge #2

//ver 1
let decision: string;

if (BMIMark > BMIJohn) {
  decision = `Mark has higher BMI ${BMIMark}`;
} else {
  decision = `John has higher BMI ${BMIJohn}`;
}

console.log(decision);

//ver 2
const markHigherBMI3: string =
  BMIMark > BMIJohn
    ? `Mark has higher BMI ${BMIMark}`
    : `John has higher BMI ${BMIJohn}`;

console.log(markHigherBMI3);
