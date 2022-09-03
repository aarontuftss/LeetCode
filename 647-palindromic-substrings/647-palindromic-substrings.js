/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0
    let i = 1

    while (i <= s.length) {
        for (let j = 0; j < s.length; j++) {
            if (i + j > s.length) break
            let test = s.substring(j, i + j)
            let reverse = test.split('').reverse().join('')
            if (test === reverse) count++
        }
        i++
    }

    return count
};