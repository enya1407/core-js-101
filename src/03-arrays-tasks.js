/* ********************************************************************************************
 *                                                                                            *
 * Plese read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implmeneted using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */

function findElement(arr, value) {
  return arr.indexOf(value);
}

function generateOdds(len) {
  const arr = new Array(len);
  return arr.fill(1).map((el, i) => (i > 0 ? el + i * 2 : el));
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function getArrayOfPositives(arr) {
  return arr.filter((el) => el > 0);
}

function getArrayOfStrings(arr) {
  return arr.filter((el) => typeof el === 'string');
}

function removeFalsyValues(arr) {
  return arr.filter((el) => el);
}

function getUpperCaseStrings(arr) {
  return arr.map((el) => el.toUpperCase());
}

function getStringsLength(arr) {
  const result = [];
  arr.forEach((el) => {
    result.push(el.length);
  });
  return result;
}

function insertItem(arr, item, index) {
  return arr.splice(index, 0, item);
}

function getHead(arr, n) {
  return arr.splice(0, n);
}

function getTail(arr, n) {
  return arr.slice(-n);
}

/**
 * Returns CSV represebtation of two-dimentional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ]
 *           =>
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
function toCsvText(/* arr */) {
  throw new Error();
}

function toArrayOfSquares(arr) {
  return arr.map((el) => el ** 2);
}

function getMovingSum(arr) {
  let acc = 0;
  return arr.map((el) => {
    const res = el + acc;
    acc += el;
    return res;
  });
}

function getSecondItems(arr) {
  return arr.filter((el, i) => i % 2 !== 0);
}

function propagateItemsByPositionIndex(arr) {
  const result = [];
  arr.forEach((el, i) => {
    for (let j = 0; j <= i; j += 1) {
      result.push(el);
    }
  });
  return result;
}

function get3TopItems(arr) {
  return arr.reverse().splice(0, 3);
}

function getPositivesCount(arr) {
  let result = 0;
  arr.forEach((el) => {
    if (el > 0 && typeof el === 'number') {
      result += 1;
    }
  });
  return result;
}

function sortDigitNamesByNumericOrder(arr) {
  const names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return arr.sort((a, b) => names.indexOf(a) - names.indexOf(b));
}

function getItemsSum(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

function getFalsyValuesCount(arr) {
  let result = 0;
  arr.forEach((el) => {
    if (!el) {
      result += 1;
    }
  });
  return result;
}

function findAllOccurences(arr, item) {
  let result = 0;
  arr.forEach((el) => {
    if (el === item) {
      result += 1;
    }
  });
  return result;
}

function toStringList(arr) {
  return arr.join(',');
}

/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */
function sortCitiesArray(/* arr */) {}

/**
 * Creates an indentity matrix of the specified size
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */
function getIdentityMatrix(/* n */) {
  throw new Error();
}

function getIntervalArray(start, end) {
  const result = [];
  let i = start;
  while (i <= end) {
    result.push(i);
    i += 1;
  }
  return result;
}

function distinct(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const value = arr[i];
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  return result;
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(/* array, keySelector, valueSelector */) {
  throw new Error();
}

/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element
 *                                     that returns an array of children
 * @return {array}
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], x=>x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
  const result = arr.map(childrenSelector);
  return [].concat(...result);
}

/**
 * Returns an element from the multidimentional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
  let result = arr;
  indexes.map((el) => {
    result = result[el];
    return null;
  });
  return result;
}

/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position.
 *
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
function swapHeadAndTail(/* arr */) {
  throw new Error();
}

module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
