/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {

    if (dice === undefined) {
        throw new Error('getPokerHand must take an argument');
    }
    if (!Array.isArray(dice)) {
        throw new Error('The argument is not an array');
    }
    if (dice.length !== 5) {
        throw new Error('The array length must be 5');
    }

    var counter = [0, 0, 0, 0, 0, 0];
    for (var i in dice) {
        if (!Number.isInteger(dice[i])) {
            throw new Error('The value is not an integer');
        }
        if (dice[i] < 1 || dice[i] > 6) {
            throw new Error('The value is not in range 1-6');
        }
        counter[dice[i] - 1]++;
    }
    counter.sort().reverse();

    switch (counter[0]) {
        case 5:
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            if (counter[1] === 2) {
                return 'Фулл хаус';
            } else {
                return 'Тройка';
            }
        case 2:
            if (counter[1] === 2) {
                return 'Две пары';
            } else {
                return 'Пара';
            }
        default:
            return 'Наивысшее очко';
    }
}
module.exports = getPokerHand;
