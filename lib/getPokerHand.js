/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    var elementsFrequency = {};
    var frequency = [];

    validateData(dice);

    elementsFrequency = calculateFrequency(dice);
    frequency = Object.values(elementsFrequency);

    return getCombination(frequency);
}
function calculateFrequency(elements) {
    var result = {};

    elements.forEach(function (element) {
        if (result[element]) {
            result[element] += 1;
        } else {
            result[element] = 1;
        }
    });

    return result;
}

function getCombination(frequency) {
    const notFound = -1;

    if (frequency.indexOf(5) !== notFound) {
        return "Покер";
    } else if (frequency.indexOf(4) !== notFound) {
        return "Каре";
    } else if (frequency.indexOf(3) !== notFound && frequency.indexOf(2) !== notFound) {
        return "Фулл хаус";
    } else if (frequency.indexOf(3) !== notFound) {
        return "Тройка";
    }

    var counter = 0;
    frequency.forEach(function (value) {
        if (value === 2) {
            counter += 1;
        }
    });

    if (counter === 2) {
        return "Две пары";
    }

    if (counter === 1) {
        return "Пара";
    }

    return "Наивысшее очко";

}

function validateData(dice) {
    const notFound = -1;
    const allowedLength = 5;
    const allowedElements = [1, 2, 3, 4, 5, 6];

    if (!Array.isArray(dice)) {
        throw new Error("Входной параметр должен быть массивом");
    }

    if (dice.length !== allowedLength) {
        throw new Error("Массив должен содержать ровно 5 элементов");
    }

    dice.forEach(function (value) {
        if (allowedElements.indexOf(value) === notFound) {
            throw new Error("Недопустимые элементы в массиве");
        }
    });
}

module.exports = getPokerHand;
