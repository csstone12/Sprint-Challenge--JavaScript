/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const arr = [];
  for (let i = 0, leng = elements.length; i < leng; i++) {
    arr[i] = cb(elements[i]);
  }
  return arr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return (...args) => {
    count += 1;
    if (count > n) return null;
    return cb(...args);
  };
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  return (args) => {
    const cacheKey = args.toString();
    if (!(cacheKey in cache)) {
      cache[cacheKey] = cb(args);
    }
    return cache[cacheKey];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  const revArr = str.split('');
  revArr.reverse();
  return revArr.join('');
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const vals = Object.values(obj);
  let flattened = [];
  let tempVal;
  let allSame = true;

  const flatten = (elements) => {
    let newArr = [];
    for (let i = 0; i < elements.length; i++) {
      if (typeof elements[i] === 'object') {
        const temp = Object.values(elements[i]);
        newArr = newArr.concat(flatten(Object.values(temp)));
      } else {
        newArr.push(elements[i]);
      }
    }
    return newArr;
  };

  flattened = flatten(vals);

  flattened.forEach((i) => {
    tempVal = flattened[0];
    if (i !== tempVal) allSame = false;
  });

  return allSame;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let result = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      const subArray = flatten(elements[i]);
      result = result.concat(subArray);
    } else {
      result.push(elements[i]);
    }
  }
  return result;
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
