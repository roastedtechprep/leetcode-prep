/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s[i] != s[j]) return false
    }
    return true
};
