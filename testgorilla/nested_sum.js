/**
 * Gets the sum of nested array.
 * Disregards elements that are not of "number" type.
 * Examples:
 * - [1, 2, 3, 4, [5], "6"]
 * - [1, 2, [[[[[3]]]]]]
 * @param {*} arr 
 * @returns sum
 */
export function nestedSum( arr ) {
  if (!arr.length) return 0;
 
  let sum = 0;
  for (let i = 0; i < arr.length; i ++) {
    const element = arr[i];
    if (typeof element === 'number') {
      sum += element;
    } else if (element instanceof Array) {
      sum += nestedSum(element);
    }
  }

  return sum;
}