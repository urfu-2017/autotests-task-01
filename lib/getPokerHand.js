'use strict';

const array = require('lodash/array');

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (!Array.isArray(dice)) {
        throw new Error('Input parameter is not type of Array');
    }
    if (dice.length > 5) {
        throw new Error('Length of input array more then 5');
    } else if (dice.length < 5) {
        throw new Error('Length of input array less then 5');
    }

    // новый массив, содержащий количество вхождений каждого числа в переданный массив
    const numberOfValue = new Array(6).fill(0);

    dice.forEach(nValue => {
        if (typeof nValue !== 'number') {
            // isNaN не работает на массиве с одним числом: [4, [6], 1, 2, 3]
            throw new Error('Array contains not a number');
        }
        if (nValue < 1 || nValue > 6) {
            throw new Error('Array\'s element is out of range');
        } 
        if (nValue % 1 !== 0) {
            throw new Error('Array\'s element is not Integer');
        }
        // копим значение по соответствующему индексу
        ++numberOfValue[nValue - 1];
    })
    
    // удаляем все элементы, не встретившиеся ни разу
    const notZeroElem = array.compact(numberOfValue);

    // перемножаем все элементы на case 2, case 3 (далее)
    const multiplElem = notZeroElem.reduce((mult, elem) => mult * elem);

    switch (notZeroElem.length) {
        case 1:
            return 'Покер';
        case 2:
            // notZeroElem -- [4, 1] или [3, 2]
            return multiplElem === 4 ? 'Каре' : 'Фулл хаус';
        case 3:
            // notZeroElem -- [2, 2, 1] или [3, 1, 1]
            return multiplElem === 4 ? 'Две пары' : 'Тройка';
        case 4:
            return 'Пара';
        default:
            return 'Наивысшее очко';
    }
}

module.exports = getPokerHand;
