/**
 * ArrayChallenge - check if the given ranges have overlapped
 * 5 elements in array
 * arr[0] and arr[1] - define the first range of the array
 * arr[2] and arr[3] - define the second range of the array
 * arr[4] - define the number of elements overlapping
 * return true if the ranges have overlapped and the number of overlapping elements is the same with arr[4]
 * otherwise, return false
 * 
 */

function ArrayChallenge(arr: number[]): boolean { 
  const firstRange: number[] = [];
  const secondRange: number[] = [];

  for (let i = arr[0]; i <= arr[1]; i++) {
    firstRange.push(i);
  }
  for (let i = arr[2]; i <= arr[3]; i++) {
    secondRange.push(i);
  }

  const overlappingArr = firstRange.filter(el => secondRange.includes(el));

  return overlappingArr.length >= arr[4];
}
   
// keep this function call here 
console.log(ArrayChallenge(readline()));