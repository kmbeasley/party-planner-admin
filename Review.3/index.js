/**
 * Copy the color of the closest neighbor
 * // neighbors is an array of birds
 * @param {Bird[]} neighbors
 */

// This is the function named camoflage and takes one paramater: neightbors
//If there are no neighbors do not return anyhting, no birds together.
function camouflage(neighbors) {
  //gaurd case: if there are no neightbors, then return right away
  if (!neighbors.length) return;
  // we reduce the neighbors array to a variable named closestNeighbor
  const closestNeighbor = neighbors.reduce(
    // reduce funtion takes two paramaeters:
    // 1. `closest` is the accumulator
    // 2. `bird`is each element in neighbors
    (closest, bird) => {
      // calculating distnace between current bird, and another bird, to pick the closest.
      const distance = this.position.dist(bird.position);
      // if new distance is smaller, bird comes back and goes to mearest bird to start with.
      // Using a ternary to determine what to return
      // condition ? A : B
      // A if contdition is true, otherwise B

      // if the calculated distance is CLOSEr than the accumulator's distance
      // then return a new object containing the new distance & the neighbor bird
      // neew object is created with shorthand property syntax
      //OTHERWISE, kee th the accumulator the same.
      return distance < closest.distance ? { distance, bird } : closest;
    },
    // The distance is compairng the birds and starts with infinity distance to the closest bird.
    //2nd argument to reduce
    // It is an object with two keys: infinite distance & the first neighbor
    // This is the initial value of the accumulator `closest`
    { distance: Infinity, bird: neighbors[0] },
  );
  // the closest bird would change to the nearest birds color and flock together.
  //We need `.bird.color` because cloestNeighbor shape is {distance, bird}
  this.color = closestNeighbor.bird.color;
}
