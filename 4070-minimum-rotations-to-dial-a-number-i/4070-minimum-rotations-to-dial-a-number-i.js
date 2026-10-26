/**
 * @param {string} s
 * @return {number}
 */
var minRotations = function(s) {
     let current = 0;
    let rotations = 0;

    for (let i = 0; i < s.length; i++) {
        const target = Number(s[i]);

        const directDistance = Math.abs(target - current);
        const circularDistance = 10 - directDistance;

        rotations += Math.min(directDistance, circularDistance);

        current = target;
    }

    return rotations;
};