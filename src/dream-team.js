const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( /* members */ ) {
    throw new NotImplementedError('Not implemented');
    let filteredArr = this.filter(function(val) { return !(typeof val === "number" || val === "" || typeof val == "undefined" || val === null || val === true || val === false) })

    return filteredArr.sort().map((word) => word[0]).join('')
}

module.exports = {
    createDreamTeam
};