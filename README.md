# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @arie139/lotide`

**Require it:**

`const _ = require('@arie139/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns first element of array.
* `function1(tail)`: returns all but the first element of an array.
* `function1(middle)`: returns middle element of the array.
* `function1(assertArraysEqual)`: test comparison actual/expected results of arrays.
* `function1(assertEqual)`: test comparison actual/expected.
* `function1(assertObjectsEqual)`: test comparison of objects actual/expected.
* `function1(countLetters)`: returns an object with count of how many times letter appeared in input.
* `function1(countOnly)`: the count of a requested item.
* `function1(eqArrays)`: test if arrays are equivalent.
* `function1(eqObjects)`: test if objects are equivalent.
* `function1(findKey)`: finds the key of an object using a callback function.
* `function1(findKeyByValue)`:finds the key of an object using a object value and a callback function.
* `function1(letterPositions)`: letter position of a letter in a sentence.
* `function1(map)`: can apply a function to each key in the object.
* `function1(takeUntil)`: removes items from an array until callback function requirement is met.
* `function1(without)`:compare two arrays