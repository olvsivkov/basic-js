const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arr = []
    arr.push(n.toString())
    let arrString = arr[0].split('').slice()
    let arrNum = arrString.map(parseFloat);
    let minNum = Math.min.apply(null, arrString);
    let index = arrNum.indexOf(minNum);
    if (index > -1) {
        arrNum.splice(index, 1);
    }
    let result = +arrNum.join('')
    return result
}

module.exports = {
    deleteDigit
};