//Coding challenge #1
const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);
    dogs.forEach((dog, i) => {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and ${dog} years old`);
        }
        else {
            console.log(`Dog number ${i + 1} is a still puppy`);
        }
    });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
//Coding challenge #2
const calcAverageHumanAge = (ages) => {
    const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
    const adults = humanAges.filter((age) => age >= 18);
    const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    return average;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
