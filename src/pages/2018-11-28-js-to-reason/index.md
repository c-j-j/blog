---
layout: post
title:  Converting a HackerRank problem from Javascript to ReasonML
date:	2018-11-28
categories: javascript reasonml hackerrank counting valleys
---

Here is the HackerRank problem that I’ll be converting from Javascript to ReasonML: https://www.hackerrank.com/challenges/counting-valleys/problem

The solution I came up with in Javascript is very imperative, relying on mutation, imperative loops, if statements, and so on;

```javascript
// Complete the countingValleys function below.
function countingValleys(n, s) {
  let level = 0;
  let numberOfValleys = 0;

  for (let i = 0; i < n; i++) {
    const next = s[i]
    if (next === 'U') {
      if (level === -1) {
        numberOfValleys = numberOfValleys + 1;
      }
      level = level + 1;
    } else if (next === 'D') {
      level = level - 1;
    }
  }
  return numberOfValleys;
}
```

My goal with converting this to Reason was to come up with a more functional solution that replaces iteration with recursion and to keep everything immutable. Here is the same solution in Reason:

```reason
let countingValleys = (~s) => {
  let rec iter = (~numberOfValleys, ~level, ~s) =>
    if (String.length(s) === 0) {
      numberOfValleys;
    } else {
      let next = s.[0];
      let rest = String.sub(s, 1, String.length(s) - 1);
      switch (next, level) {
      | ('U', (-1)) => iter(~numberOfValleys=numberOfValleys + 1, ~level=level + 1, ~s=rest)
      | ('U', _) => iter(~numberOfValleys, ~level=level + 1, ~s=rest)
      | ('D', _) => iter(~numberOfValleys, ~level=level - 1, ~s=rest)
      | (_, _) => iter(~numberOfValleys, ~level, ~s=rest)
      };
    };
  iter(~s, ~numberOfValleys=0, ~level=0);
};

```

When converting an iterative solution to recursion, there’s generally a few things that need to happen;

1. Introduce a base case for the function to return. Here it’s when there’s no more string left to process, in which case we return the result that has been accumulated and passed down.
2. Rather than mutate values in the recursive function, we create new values and pass them to itself. For example in the solution above, we are changing the level by calling `iter(~level=level+1.,...)` to create the new value.
3. We want to hide the recursive nature of our new function, so it tidies things up to have an internal recursive function that has the accumulating result as an argument to this internal function. Here I’ve added the iter function that handles the recursion.
Let’s break down a few more things;

```
let rec iter = ...
```

To write a recursive function in Reason requires the function to be labelled with therec keyword. This makes this function tail call optimised, so we don’t have to worry about insanely long strings blowing the stack (the compiler turns it into a`while(true)` loop).

```reason   
switch(next, level) = {
  | ('U', -1) => iter(~numberOfValleys=numberOfValleys + 1, ~level=level + 1, ~s=rest)
...
```
I’ve replaced the if statements with pattern matching — which I find makes it clearer how the result numberOfValley value is changing given some particular input.

In general, I find this Reason solution to be more declarative/readable.