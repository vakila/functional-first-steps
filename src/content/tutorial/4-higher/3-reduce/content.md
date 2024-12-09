---
type: lesson
title: Reduce
---

## Reduce


The `reduce` function is the odd one of the bunch. Unlike filter and map, which each take an array and return another array, reduce takes in an array and returns a single value - in other words, it "reduces" an array to a single value.



The `reduce` function has been implemented for you here, using our now-familiar array utilities. Take a moment to read through the code and try to understand what it's doing. 



:::info 


`reduce` takes three arguments:

- a "reducer" function which returns a single value, and takes two arguments: 

    - an "accumulator" value representing the reduced value so far
    - the next value from the array

- the initial accumulator value, passed to the first call of the reducer function
- the array to reduce

:::


Complete the implementations of `sum` and `max` to satisfy the tests by providing an appropriate reducer function and accumulator value. 