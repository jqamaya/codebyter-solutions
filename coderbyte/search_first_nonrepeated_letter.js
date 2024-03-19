/**
 * Searching Challenge - search for the first non-repeated letter in a string and intersperse it with a given token
 */


/**
 * Insert/distribute the @param str to a given token character-by-character
 * @param str first non repeated letter
 * @returns interspersed str with the token
 */
function intersperse(str) {
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

function SearchingChallenge(str) {
  let firstNonRepeated = str.charAt(0);
  for (let i = 0; i < str.length; i++) {
    const character = str.charAt(i);
    if (str.indexOf(character) === i && str.indexOf(character, i+1) === -1) {
      firstNonRepeated = character;
      break;
    }
  }
  return intersperse(firstNonRepeated.toString());

}
   
// keep this function call here 
console.log(SearchingChallenge(readline()));