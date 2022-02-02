# Difference

```js
function arrayDiff(arr = [], toRemove = []) {
  const result = [];
  for (let element of arr) {
    if (!toRemove.includes(element) && !result.includes(element))
      result.push(element);
  }
  return result;
}

console.log(arrayDiff([1, 2, 't', 2, 3, 3], [3])); // output: [1, 2, 't']
```

---

## Docstring

Here's a starter docstring for your solutions. Feel free to rewrite it if that
helps you understand:

```js
/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
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
```

> Docstring is adapted from
> [lodash's difference](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L6947)
