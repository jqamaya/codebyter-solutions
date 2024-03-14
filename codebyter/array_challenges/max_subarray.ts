/**
 * ArrayChallenge - get the sum of the max subarray from an array of numbers
 * @param arr 
 * @returns sum of the max subarray
 */
function ArrayChallenge(arr: number[]): number { 
	let sum = -100001;
	let temp = 0;

	for (let i = 0; i < arr.length; i++) {
		temp = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			temp += arr[j];
			if (temp < 0) break;
			if (temp >= sum) {
				sum = temp;
			}
		}
		if (arr[i] > sum) {
			sum = arr[i];
		}
	}
	return sum; 

}
     
// keep this function call here 
console.log(ArrayChallenge(readline()));