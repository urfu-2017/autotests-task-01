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
        throw new Error('the array must contain 5 elements');
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
        // addCollection(collectionDice[item], item);
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

/* function addCollection(collectionDice, item) {
    if (!collectionDice.length) {
        collectionDice.push({ dice: item, count: 1 });

        return;
    }
    let indexDice = -1;
    collectionDice.forEach((colDice, index) => {
        if (colDice.dice === item) {
            indexDice = index;
        }
    });  
    if (indexDice === -1) {
        collectionDice.push({ dice: item, count: 1 });
    } else {
        collectionDice[indexDice].count++;
    }
}*/

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
