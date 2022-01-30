# Remove consecutive duplicates: Omer approach

---

## Strategy

1. Create a new array of words from a given string.
2. Iterate through the array.
3. Set a condition that checks if the previous element is equal to the current one.
4. In case the condition is met, send the element to a new array.
5. Turn the array into a string.
6. Return the final string.

---

## Implementation

**split() method**: Using split method, I created an array of words from
given string.

**empty array**: I created an empty array to push filtered array elements later.

**for loop**: To filter array elements I chose to use for loop.

**if statement**: if statement is used to find and eliminate repeated words.

**push() method**: Push method is used to send non-repeated words to a new
empty array.

**join() method**: At the end, in return, I used join method to combine
non-repeated words as a string.

```js

```

---

## Use Cases

The function can be useful for revising writing mistakes of user's input in web
or software applications by deleting repeated words.

In collecting user data, inquiries, demands:

```js
const userInput = prompt('Enter your question please?');
const isAnyTypo = removeConsecutiveDuplicates(userInput);
if(isAnyTypo!==userInput){
    confirm(`Did you mean "${isAnyTypo}"`);
}
else{
    const message = "Thanks! We received your message and we will get back to you as soon as possible.";
    alert(message);
}
```

For text or essay revision:

```js
const userEssay = prompt('Enter your essay here..');
const revisedEssay = removeConsecutiveDuplicates(userEssay);
alert(revisedEssay);
```

---

## Inspiration

I solved the challenge with my current knowledge, but later I improved it with the inspiration
of [Imahori's solution](https://www.codewars.com/kata/reviews/5b39e927e7a2c103300018b5/groups/5b3a6472615a90b74d000e04).
Basically, I was assuming that I can't
check arr[i]!==arr[i-1] when i=0, because it would be arr[-1] and undefined.
But from his solution, I see that it is possible. When you check if(arr[0]!==arr[-1])
, it results true. It means that arr[0]!==undefined is true. Then, I refactored
the solution.
My solution becomes shorter and cleaner than my previous solution.
<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
