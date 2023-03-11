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
//Coding challenge #3
const calcAverageHumanAgeNew = (ages) => {
    const averageNew = ages
        .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
        .filter((age) => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    return averageNew;
};
console.log(calcAverageHumanAgeNew([5, 2, 4, 1, 15, 8, 3]));
//Coding challenge #4
//Data
const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];
//1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);
//2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood ? "much" : "little"}`);
// 3.
const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recFood)
    .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recFood)
    .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);
// 4.
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too little`);
//5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));
//6.
const checkEatingOkay = (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));
//7.
console.log(dogs.filter(checkEatingOkay));
//8.
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);
