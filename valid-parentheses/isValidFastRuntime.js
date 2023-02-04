/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (const char of s) {
    if (char in pairs) stack.push(char);
    else {
      const top = stack.pop();
      if (top === undefined || pairs[top] !== char) {
        return false;
      }
    }
  }

  return !stack.length;
}
