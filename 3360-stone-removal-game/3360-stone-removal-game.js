/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    const missing = 55 - n;  
    const unplayed = Math.round(Math.sqrt(2 * missing));  
    return unplayed % 2 === 1; 
};