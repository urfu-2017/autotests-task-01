/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (dice === undefined) {
        throw new Error('Введите список из 5 костей.');
    }
    if (!Array.isArray(dice)) {
        throw new Error('Передайте на вход массив из 5 костей.');
    }
    if (dice.length !== 5) {
        throw new Error("Введите список из 5 костей.");
    }
    for (var i in dice) {
        if (isNaN(dice[i])) {
            throw new Error("Кость может принимать значения только от 1 до 6.");
        }
        if (dice[i] < 1 || dice[i] > 6) {
            throw new Error("Кость может принимать значения только от 1 до 6.");
        }
        if (parseInt(dice[i]) !== dice[i]) {
            throw new Error("Кость может принимать только целые положительные значения.");
        }
    }

    var elementsCount = getElementsCount(dice);
    var length = Object.keys(elementsCount).length;

    if (length === 1) {
        return "Покер";
    }
    if (length === 4) {
        return "Пара";
    }

    var values = getDictValues(elementsCount);
    if (length === 2) {
        if (values.indexOf(4) !== -1) {
            return "Каре";
        }
        else {
            return "Фулл хаус";
        }
    }
    if (length === 3) {
        if (values.indexOf(3) !==-1) {
            return "Тройка";
        }
        else {
            return "Две пары";
        }
    }
    return "Наивысшее очко";
}

function getDictValues(dict) {
    var values = [];
    for (var key in dict) {
        values.push(dict[key]);
    }
    return values;
}

function getElementsCount(dice) {
    var elementsCount = {};
    dice.forEach(function (item) {
        if (item in elementsCount) {
            elementsCount[item] += 1;
        }
        else {
            elementsCount[item] = 1;
        }
    });
    return elementsCount;
}

module.exports = getPokerHand;
