/* eslint-disable folders/match-regex */
/**
 * Check the values of the second array and see if they are included in the first one.
 *
 * If they are, send them to a third array.
 *
 * Follow the order of the first array.
 *
 * Check if there are repeated elements in the array. If that's the case, eliminate the repeated elements.
 *
 * @param {Array} [arr1 = []] - The first array to check.
 * @param {Array} [arr2 = []] - The values to compare and include if present in the first array.
 * @returns {Array} [arr3 = []] - Returns a new array and without affecting the other two.
 *
 * Intersection([2, 1], [2, 3]);
 * // -> [2].
 *
 * @example
 *
 * intersection([2, 1, 2], [2, 3]);
 * // -> [2]
 */

export const intersection = (arr1 = [], arr2 = []) => {
  const arr3 = [];
  for (const val2 of arr2) {
    for (const val1 of arr1) {
      if (val2 === val1) {
        arr3.push(val2);
      }
    }
  }
  return arr3;
};
