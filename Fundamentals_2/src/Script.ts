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
