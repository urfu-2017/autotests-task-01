/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (!isPokerOnBones(dice)) {
        throw new Error('Некорректные входные данные для игры "Покер на костях"');
    }
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
        default:
            throw new Error('Ошибка в обработки некорректного входа.\nОбратитесь к разработчику');
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

function isPokerOnBones(array) {
    const possibleValues = new Set([1, 2, 3, 4, 5, 6]);
    if (!Array.isArray(array) || array.length !== 5) {
        return false;
    }
    for (let i = 0; i < array.length; i++) {
        if (!possibleValues.has(array[i])) {
            return false;
        }
    }

    return true;
}

module.exports = getPokerHand;
