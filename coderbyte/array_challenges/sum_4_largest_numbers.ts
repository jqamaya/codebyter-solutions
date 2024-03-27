/**
 * ArrayChallenge - get the sum of the 4 largest numbers in an array
 */

/**
 * Insert/distribute the @param str to a given token character-by-character
 * @param str first non repeated letter
 * @returns interspersed str with the token
 */
function intersperse(str: string): string {
  const token = "r569cjogb0";
  const a = str.split("").filter(el => !!el);
  const b = token.split("");

  let merged = "";

  for (let i = 0; i < a.length || i < b.length; i++) {
    if (i < a.length) {
      merged += a[i];
    }
    if (i < b.length) {
      merged += b[i];
    }
  }

  return merged;
}

function ArrayChallenge(arr: number[]): string {
  let sorted = arr
    .sort((a, b) => b - a)
    .slice(0, 4);
  if (sorted.length < 4) {
    sorted = arr;
  }

  const sum = sorted.reduce((partialSum, a) => partialSum + a, 0);
  const finalStr = intersperse(sum.toString());

  return finalStr;
}
   
// keep this function call here 
console.log(ArrayChallenge(readline()));