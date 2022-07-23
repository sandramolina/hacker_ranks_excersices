let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
  //Creates array of objects with the count per unique colour:
  const socksObjects = [];
  ar.forEach((sock) => {
    if (socksObjects[sock]) {
      socksObjects[sock].count++;
    } else {
      socksObjects[sock] = { count: 1 };
    }
  });

  //Calculates the total of sock pairs
  let totalPairs = 0;
  socksObjects.forEach((sock) => {
    if (sock.count % 2 === 0) {
      totalPairs += sock.count / 2;
    } else if (sock.count % 2 === 1) {
      totalPairs += (sock.count - 1) / 2;
    }
  });

  return totalPairs;
}

console.log(sockMerchant(9, ar));

//console.log(objects);

// const objects = {};
// ar.forEach((sock) => (
//     if (objects.includes(sock)){
//         objects[sock] = { sock, count: 1 }
//     }  ));
