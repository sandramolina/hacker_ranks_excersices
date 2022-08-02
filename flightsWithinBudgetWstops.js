//Return the list of destination that are affordable, with Connections (intermediate stops)
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
    const destinationObject = { destination: flight[1], fare: flight[2] };
    return destinationObject;
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

//Entry point
const solution = (flights, origin, budget) => {
  const flightsWithinBudgetWithIntermediateStops = intermediateStops(
    flights,
    origin,
    budget
  );
  //console.log(flightsWithinBudgetWithIntermediateStops);

  const destinations = flightsWithinBudgetWithIntermediateStops.map(
    (flight) => {
      return flight.destination;
    }
  );
  return [...new Set(destinations)];
};

//intermediateStops is a function called recursively for each flight within budget
const intermediateStops = (flights, origin, budget) => {
  //flightsWithinBudget is an array of objects with the destination and the fare for each origin
  const flightsWithinBudget = getFlightsForBudget(flights, origin, budget);
  //console.log(origin, flightsWithinBudget);

  //If there's no flight within budget for a given origin, then intermediaStops returns []
  if (flightsWithinBudget.length === 0) {
    return [];
  }

  let returnedFlights = [];
  flightsWithinBudget.forEach((flight) => {
    const newFlight = intermediateStops(
      flights,
      //For each call, the origin will be replaced by the destination
      flight.destination,
      //the budget will be decreased by the fare because we need to include the whole trip
      budget - flight.fare
    );
    returnedFlights = [...flightsWithinBudget, ...newFlight];
  });

  return returnedFlights.filter((flight) => flight.destination != origin);
};
//solution(flights, 'EDI', 500);

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
