/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
   const start = arriveAlice > arriveBob
        ? arriveAlice
        : arriveBob;

    const end = leaveAlice < leaveBob
        ? leaveAlice
        : leaveBob;

    if (start > end) {
        return 0;
    }

    const daysInMonth = [
        31, 28, 31, 30, 31, 30,
        31, 31, 30, 31, 30, 31
    ];

    const toDayOfYear = (date) => {
        const [month, day] = date.split("-").map(Number);

        let total = day;

        for (let i = 0; i < month - 1; i++) {
            total += daysInMonth[i];
        }

        return total;
    };

    return toDayOfYear(end) - toDayOfYear(start) + 1;
};