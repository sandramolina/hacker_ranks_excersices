// const solution = (flights, origin, budget) => {
//   const filteredArray = flights.filter((flight) =>
//     isWithibBudget(origin, budget, flight)
//   );

//   const destinations = filteredArray.map((flight) => {
//     return flight[1];
//   });

//   //new Set to remove duplicates from the list
//   return [...new Set(destinations)];
// };

// const isWithibBudget = (origin, budget, flight) => {
//   if (flight[2] <= budget && origin === flight[0]) {
//     return true;
//   }

//   return false;
// };

///////////////
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

//The first test case won't pass because even though the elements are the same, the order is different. I run out of time and didn't manage to find how to get the expected order returned

//getFlightsForBudget filter the flights that the traveller will be able to purchase with the given budget. This function will return a list of objects that contain the destination and the fare as key value pairs.
const getFlightsForBudget = (flights, origin, budget) => {
  const filteredArray = flights.filter((flight) =>
    isWithibBudget(origin, budget, flight)
  );

  const destinations = filteredArray.map((flight) => {
    const flightFare = { destination: flight[1], fare: flight[2] };
    return flightFare;
  });

  //use ...new Set to remove duplicates from the list.
  return [...new Set(destinations)];
};

//isWithibBudget will return a boolean that stablish either the flight is affordable given the provided budget from certain destination, this is a helper function to getFlightsForBudget
const isWithibBudget = (origin, budget, flight) => {
  if (flight[2] <= budget && origin === flight[0]) {
    return true;
  }

  return false;
};

//
const solution = (flights, origin, budget) => {
  const flightsWithinBudget = intermediateStops(flights, origin, budget);
  const destinations = flightsWithinBudget.map((flight) => {
    return flight.destination;
  });
  return [...new Set(destinations)];
};

const intermediateStops = (flights, origin, budget) => {
  const flightsWithinBudget = getFlightsForBudget(flights, origin, budget);

  if (flightsWithinBudget.length === 0) {
    return [];
  }

  let returnedFlights = [];
  flightsWithinBudget.forEach((flight) => {
    const newFlight = intermediateStops(
      flights,
      flight.destination,
      budget - flight.fare
    );
    returnedFlights = [...flightsWithinBudget, ...newFlight];
  });

  return returnedFlights.filter((flight) => flight.destination != 'EDI');
};

console.log(solution(flights, 'EDI', 500));

// const solution = (flights, origin, budget) => {
//     const flightsWithinBudget = getFlightsForBudget(flights, origin, budget)
//     const index = 0
//     const
//     while (budget > 0 || index < flightsWithinBudget.length ) {
//         getFlightsForBudget(flights, flightsWithinBudget[index].destination, budget - flightsWithinBudget[index].fare)
//         index++
//     }
// }
