const {Queue} = require('./Queue')

/*
Problem from Amazon:
You are stranded in a post-apocalyptic desert with a motorbike. Starting with a full tank of gas, 
you are trying to cross the desert to reach your destination.
There are several outposts scattered throughout the desert where you can fill up on gas, 
but as they are dangerous, you want to minimize the number of stops you need to make.

Given a tank size, a list of outpost locations (as a 2D array of x,y coordinates) , 
a start location, and a target destination,
return the fewest number of outposts that need to be visited (shortest path) to reach your destination.

NOTES (answers to clarification questions): 
- we aren't looking for the shortest path in terms of *distance*, 
just in terms of the number of locations visited
- tank size is guaranteed to be greater than 0 (but not guaranteed to be big enough to reach any locations)
- tank size is in units of distance (so a tank size of 1 means you can travel 1 unit of distance)
- you are not limited to moving in just the cardinal directions, 
you can move at any angle as long as you have enough gas (Hint: think distance formula)
- you should be using a queue as part of your algorithm!
think back to the toArrLevelOrder algorithm we did with BSTs, we need to do something similar (but without a BST)
*/
  // DISTANCE FORMULA HELPER METHOD a: [0,0]   b: [1,2]
  const calcDistance = (a, b) => Math.sqrt((a[0] - b[0])**2 + (b[1] - a[1])**2);
/**
 * Determines the path with the fewest number of outposts that need to be visited to reach your destination
 * - Time: O(?)
 * - Space: O(?)
 * @param {Array<int>} start An array of (x,y) coordinates representing the starting location
 * @param {Array<int>} target An array of (x,y) coordinates representing the target location
 * @param {Array<Array<int>>} outposts A 2D array of outpost locations represented as (x,y) coordinates
 * @param {number} tankSize The furthest distance you can travel between outposts
 * @returns {number} The fewest number of outposts that need to be visited to reach the target or -1 if no path available
 */
function find_fewest_outposts_count(start, target, outposts, tankSize) {
  const notVisited = new Set(outposts); // To store all the outposts we need to visit
  const reachable = new Queue(); 
  // reachable will store all the reachable locations within the bound of tanksize
  reachable.enqueue([start, 0]) // start: [0,0] ,  0 : count of stops we have to make

  while(!reachable.isEmpty()){
    const dqNode = reachable.dequeue();
    const currentLocation = dqNode[0]; // [0,0] --> [0,1] --> [1,2]
    const count = dqNode[1]; // count: 0 --> 1 --> 1

    if(calcDistance(currentLocation, target) <= tankSize){ // from currentlocation, we can reach the target
      return count;
    }
    for(const nextLocation of notVisited){ // reaching each location from set
      if(calcDistance(currentLocation, nextLocation) <= tankSize){
        reachable.enqueue([nextLocation, count +1]); // need to make one stop, and go from that location
        notVisited.delete(nextLocation);
      }
    }
    
  }
  return -1;
  // Reachable queue: ( [0,0], 0 ) ,  ( [0,1], 1 ) ,  ( [1,2], 1 ) ,  ( [0,3], 2 )
  //                   starting         outposts with 1 stop            outposts with 2 stops
}

/**
 * Determines the path with the fewest number of outposts that need to be visited to reach your destination
 * - Time: O(?)
 * - Space: O(?)
 * @param {Array<int>} start an Array of (x,y) coordinates representing the starting location
 * @param {Array<int>} target an Array of (x,y) coordinates representing the target location
 * @param {Array<Array<int>>} outposts A 2D array of outpost locations represented as (x,y) coordinates
 * @param {number} tankSize The furthest distance you can travel between outposts
 * @returns {Array<Array<int>} A 2D array of locations representing the path that requires the fewest outposts, 
 * starting from the start location and ending at the target location or an empty array if no path available
 */

// PATH SOLUTIONS
function find_fewest_outposts_path(start, target, outposts, tankSize) {
    const notVisited = new Set(outposts); 
    const reachable = new Queue();
    reachable.enqueue([start]);
    while (!reachable.isEmpty()) {
        const path = reachable.dequeue();
        const currentLocation = path[path.length-1];
        if (calcDistance(currentLocation, target) <= tankSize) 
            return [...path, target];
        for (const location of notVisited) {
            if (calcDistance(currentLocation, location) <= tankSize) {
                reachable.enqueue([...path, location]);
                notVisited.delete(location);
            }
        }
    }
    return [];
}

function distanceBetweenPoints(x1,y1,x2,y2){
  xPointDist = (x2-x1)
  xPointDist = xPointDist ** 2

  yPointDist = (y2-y1)
  yPointDist = yPointDist ** 2

  return Math.sqrt(xPointDist + yPointDist)
}

// Here are the test cases. You can simply use the test cases below
// Sample inputs:
const outposts = [[0, 1], [0, 3], [1, 2]]
console.log(find_fewest_outposts_count([0, 0], [0, 4], outposts, 2.5)) 
// expected output: 1 - [ [ 0, 0 ], [ 1, 2 ], [ 0, 4 ] ]

const outposts4 = [[0, 1], [0, 3], [1, 2]]
console.log(find_fewest_outposts_count([0, 0], [0, 4], outposts4, 2)) 
// expected output: 2 - [ [ 0, 0 ], [ 0, 1 ], [ 0, 3 ], [ 0, 4 ] ]

const outposts2 = [[0,2], [3,3], [4,6]];
console.log(find_fewest_outposts_count([0, 0], [1, 7], outposts2, 3.25)) 
// expected output : 3 - [ [ 0, 0 ], [ 0, 2 ], [ 3, 3 ], [ 4, 6 ], [ 1, 7 ] ]

const outposts3 = [[-1,3], [1,4], [4,6], [2,7]];
console.log(find_fewest_outposts_count([0, 0], [0, 7], outposts3, 3.25)) 
// expected output : 2 - [ [ 0, 0 ], [ -1, 3 ], [ 1, 4 ], [ 0, 7 ] ]
