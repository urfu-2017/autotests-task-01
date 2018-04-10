/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (!Array.isArray(dice)) {
        throw new Error('it is not array');
    }
    if (dice.length !== 5) {
        throw new Error('the array contain not 5 elements');
    }
    const collectionDice = [];
    let index = 0;
    for (let item of dice) {
        if (typeof item !== 'number') {
            throw new Error(`element with index ${index} not number`);
        }
        if (item <= 0 || item >= 7) {
            throw new Error(`element with index ${index} not input interval 1-6`);
        }
        if (!isInteger(item)) {
            throw new Error(`element with index ${index} is not integer`);
        }
        collectionDice[index] = 0;
        collectionDice[item - 1]++;
        index++;
    }
    collectionDice.sort((a, b) => {
        return a < b;
    });

    return combinationDetermination(collectionDice);
}

module.exports = getPokerHand;

function isInteger(num) {
    return (num ^ 0) === num;
}

function combinationDetermination(collectionDice) {
    switch(collectionDice[0]) {
        case 5:
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            if (collectionDice[1] === 2) {
                return 'Фулл хаус';
            }
            return 'Тройка';
        case 2:
            if (collectionDice[1] === 2) {
                return 'Две пары';
            }
            return 'Пара';
        default:
            return 'Наивысшее очко';
    }
}
