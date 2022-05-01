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
function createDreamTeam(members) {


    if (typeof members === "number" || members === "" || members === " " || typeof members == "undefined" || members === null || members === true || members === false) return false;
    if (members.length === 1) return members.join().toUpperCase()
    else return members.sort().map((word) => word[0]).join('')
}

module.exports = {
    createDreamTeam
};