/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    checkDiceToPokerOnBones(dice);
    const numberOfIdentical = Object.values(getCounter(dice)).sort((a, b) => b - a);
    switch (numberOfIdentical.length) {
        case 1:
            return 'Покер';
        case 5:
            return 'Наивысшее очко';
        case 4:
            return 'Пара';
        case 2:
            if (numberOfIdentical[0] === 4) {
                return 'Каре';
            }
            return 'Фулл хаус';
        case 3:
            if (numberOfIdentical[0] === 3) {
                return 'Тройка';
            }
            return 'Две пары';
    }
}

function getCounter(array) {
    return array.reduce((accumulator, element) => {
        if (element in accumulator) {
            accumulator[element]++;
        } else {
            accumulator[element] = 1;
        }

        return accumulator;
    }, {});
}

function checkDiceToPokerOnBones(array) {
    const possibleValues = new Set([1, 2, 3, 4, 5, 6]);
    if (!Array.isArray(array)) {
        throw new TypeError('getPokerHand: dice не является массивом');
    }
    if (array.length !== 5) {
        throw new Error('getPokerHand: массив dice имеет длину не 5');
    }
    for (let i = 0; i < array.length; i++) {
        if (!possibleValues.has(array[i])) {
            throw new TypeError('getPokerHand: массив dice содержит элемент, не являющийся целым числом от 1 до 6');
        }
    }

    return true;
}

module.exports = getPokerHand;
