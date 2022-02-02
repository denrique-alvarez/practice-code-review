/**
 *@param {string} [sentence] - Original text to be checked for repeated consecutive words.
 *@returns {string} [result] - The new string without the repeated words.
 */

export const removeConsecutiveDuplicates = (sentence = '') => {
  const arr = sentence.split(' ');
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return result.join(' ');
};
