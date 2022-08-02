//Return destinations that are affordable given a budget and an origin
//Flights arrays got 3 elements: [0] is origin, [1] is destination, [2] fare

const flights = [
  ['LHR', 'BCN', '80.90'],
  ['EDI', 'LHR', '123.45'],
  ['BCN', 'PRG', '98.45'],
  ['EDI', 'SIN', '300.90'],
  ['PRG', 'HAN', '400.00'],
  ['EDI', 'BOM', '547.50'],
  ['EDI', 'DUB', '47.50'],
  ['DUB', 'EDI', '53.20'],
  ['DUB', 'BCN', '99.50'],
];

const solution = (flights, origin, budget) => {
  //filteredArray all flights that are within budget and origin being the given one
  const filteredArray = flights.filter((flight) =>
    isWithibBudget(origin, budget, flight)
  );

  //Creates the array of destinatios that meet the criteria
  const destinations = filteredArray.map((flight) => {
    return flight[1];
  });

  //new Set to remove duplicates from the list
  return [...new Set(destinations)];
};

const isWithibBudget = (origin, budget, flight) => {
  if (flight[2] <= budget && origin === flight[0]) {
    return true;
  }

  return false;
};
//console.log(solution(flights, 'EDI', 500));

//...new Set
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
// console.log([new Set(numbers)]); //returns object [ Set(7) { 2, 3, 4, 5, 6, 7, 32 } ]
// console.log([...new Set(numbers)]); //spread operator applied to "new Set"
