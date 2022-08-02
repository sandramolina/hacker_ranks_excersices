const solution = (flights, origin, budget) => {
  const filteredArray = flights.filter((flight) =>
    isWithibBudget(origin, budget, flight)
  );

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
