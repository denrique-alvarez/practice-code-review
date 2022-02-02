/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined 
 * by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [arr=[]] - The array to inspect.
 * @param {Array} [toRemove=[]] - The values to exclude.
 * @returns {Array} [result] - Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); //  [1]
 *
 * @example
 *
 * difference([1, 2, 1], [2, 3]); //  [1]
 */

 export function arrayDiff(arr = [], toRemove = []) {
   const result = [];
   for (let element of arr) {
     if (!toRemove.includes(element) && !result.includes(element))
       result.push(element);
   }
   return result;
 }
 
 console.log(arrayDiff([1,1,2,3],[2]));        // output: [1, 3]

 console.log(arrayDiff(["a","b", "b", "c", "d"],["c","e"]));        // output: ["a","b", "d"]

 console.log(arrayDiff([1,2,"t",2,3,3],[3]));        // output: [1, 2, 't']

 console.log(arrayDiff([1, null,"t", 2, null, 3],[3, null]));        // output: [1, 't', 2]

 console.log(arrayDiff([1, undefined, "t", 2, null, 3],[3, null]));        // output: [1, undefined, 't', 2]

 console.log(arrayDiff([1, undefined,"t", 2, null, 3],[4, undefined, null]));     // output: [1, 't', 2, 3]

 console.log(arrayDiff([1, undefined,"t", NaN, null, 3],[4, undefined, null, NaN])); // output: [1, 't', 3]
 