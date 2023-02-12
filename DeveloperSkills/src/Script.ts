const temp: number[] = [17, 21, 23];
const temp2: number[] = [12, 5, -5, 0, 4];

const printForecast = function (arr: number[]) {
  let forecast: string = ``;

  for (let i = 0; i < arr.length; i++) {
    const dayForecast = `...${arr[i]} in ${i + 1} days`;
    forecast = forecast + dayForecast;
  }

  return forecast;
};

console.log(printForecast(temp2));
