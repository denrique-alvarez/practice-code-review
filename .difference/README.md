# Difference: Group-2 Strategy

```js
function arrayDiff(arr = [], toRemove = []) {
  const result = [];
  for (let element of arr) {
    if (!toRemove.includes(element) && !result.includes(element))
      result.push(element);
  }
  return result;
}

console.log(arrayDiff([1,2,"t",2,3, 3],[3]));        // output: [1, 2, 't']

```

## Strategy

1. A new empty array is created to push elements later which will meet conditions.
2. By using a loop and conditional statement, all elements of first array are
  checked whether they met the conditions.
3. As conditions, it is checked whether first array elements are available in
  the second array and there is a duplicate in new created array.
4. The filtered elements array is returned.

## Implementation

**empty array** A empty array is created and later is used as `return`.

**`for..of..` loop** By using `for..of..`, each element of first array is checked
whether they met conditions.

**`if` statement** By using `if`, conditions are created and checked.

**`includes()`method** By using `includes()`, it is checked whether first given
array element is available in the second given array or not. And also with `includes()`
method, we eliminated duplicate elements which pass the first condition. Element
which is already available in the new array will not be pushed again.

**`&&`** and operator is used inside `if` statement since there are 2 conditions
and it is desired that both should be met.

**`push()` method**: Push method is used to send elements who met both conditions
to a new array.

## Use Cases

---

## Inspiration

For this problem, no.
