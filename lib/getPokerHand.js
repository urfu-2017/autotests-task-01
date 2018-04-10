/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (dice.length !== 5) {
        throw new Error('The array length must be 5');
    }

    var counter = [0, 0, 0, 0, 0, 0];
    for (var i in dice) {
        if (typeof dice[i] !== 'number') {
            throw new Error('The value is not a number');
        }
        if (dice[i] < 1 || dice[i] > 6 || dice[i] % 1 !== 0) {
            throw new Error('The value is not an integer from 1 to 6');
        }
        counter[dice[i] - 1]++;
    }
    counter.sort().reverse();

    if (counter[0] === 5) {
        return 'Покер';
    }
    if (counter[0] === 4) {
        return 'Каре';
    }
    if (counter[0] === 3) {
        if (counter[1] === 2) {
            return 'Фулл хаус';
        } else {
            return 'Тройка';
        }
    }
    if (counter[0] === 2) {
        if (counter[1] === 2) {
            return 'Две пары';
        } else {
            return 'Пара';
      }
    }
    return 'Наивысшее очко';
}

module.exports = getPokerHand;
