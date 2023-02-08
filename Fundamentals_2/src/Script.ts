// Coding challenge #1

//Test 1
const calcAverage = (a: number, b: number, c: number): number => {
  return (a + b + c) / 3;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins: number, avgKoalas: number) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win the trophy (${avgDolphins} vs. ${avgKoalas}) `);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win the trophy (${avgKoalas} vs. ${avgDolphins}) `);
  } else {
    console.log(`No team wins...`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// Test 2

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

checkWinner(scoreDolphins2, scoreKoalas2);

// Coding challenge #2

const bill: number = 100;

const tipLower: number = 0.15;
const tipHigher: number = 0.2;

// 1

const calcTip = (bill) => {
  return bill > 50 && bill < 300 ? bill * tipLower : bill * tipHigher;
};

const tipTest: number = calcTip(bill);

console.log(tipTest);

//2

const bills: number[] = [125, 555, 44];

//3

const tips: number[] = bills.map(function (billValue: number): number {
  return calcTip(billValue);
});

console.log(tips);

//4

const totals: number[] = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2],
];

console.log(totals);

// Coding challenge #3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function (): number {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function (): number {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}

// Coding challenge #4

const calcTipNew = (bill) => {
  return bill > 50 && bill < 300 ? bill * tipLower : bill * tipHigher;
};

//1
const billsNew = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//2
const tipsNew: number[] = [];
const totalsNew: number[] = [];

//3
for (let i = 0; i < billsNew.length; i++) {
  const tip: number = calcTipNew(billsNew[i]); //możemy użyć const ponieważ w każej kolejne iteracji zostanie on utworzony na nowo a nie zmieniany!
  tipsNew.push(tip);
  totalsNew.push(tip + billsNew[i]);
}

console.log(billsNew, tipsNew, totalsNew);

// BONUS
const calcAverageNew = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverageNew([2, 3, 7]));
console.log(calcAverageNew(totalsNew));
