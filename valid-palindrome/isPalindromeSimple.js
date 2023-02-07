/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    return string === string.split('').reverse().join('') ? true : false
};
