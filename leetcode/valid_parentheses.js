/**
 * Check if valid parentheses
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const str = s.split("");
  const expected = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
        expected.push(')');
    } else if (str[i] === '{') {
        expected.push('}');
    } else if (str[i] === '[') {
        expected.push(']');
    } else if (expected.pop() !== str[i]) {
        return false;
    }
  }
  return !expected.length;
};