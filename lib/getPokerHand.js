/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    checkIfBadValues(dice);

    var numbersCount = getNumbersCount(dice);
    if (isYahtzee(numbersCount))
        return "Покер";
    if (isFourOfAKind(numbersCount))
        return "Каре";
    if (isFullHouse(numbersCount))
        return "Фулл хаус";
    if (isTriple(numbersCount))
        return "Тройка";
    if (isTwoPairs(numbersCount))
        return "Две пары";
    if (isPair(numbersCount))
        return "Пара";

    return 'Наивысшее очко';
}

function checkIfBadValues(dice) {
    if (!Array.isArray(dice))
        throw new Error("Input should be an array");

    if (dice.length != 5)
        throw new Error("Bad input: array should have 5 elements");
    
    for (var i = 0; i < dice.length; i++) {
        if (!Number.isInteger(dice[i]))
            throw new Error("Array should contains only integers");
        if (dice[i] < 1 || dice[i] > 6)
            throw new Error("Array should have values in [1, 2, 3, 4, 5, 6]");
    }
}

function isPair(numbersCount) {
    return numbersCount.includes(2);
}

function isTwoPairs(numbersCount) {
    return isPair(numbersCount) && numbersCount.indexOf(2) != numbersCount.lastIndexOf(2);
}

function isTriple(numbersCount) {
    return numbersCount.includes(3);
}

function isFullHouse(numbersCount) {
    return isTriple(numbersCount) && isPair(numbersCount);
}

function isFourOfAKind(numbersCount) {
    return numbersCount.includes(1) && numbersCount.includes(4);
}

function isYahtzee(numbersCount) {
    return numbersCount.length == 1;
}

function getNumbersCount(dice) {
    var data = {};
    var result = [];

    for (var i = 0; i < dice.length; i++) {
        if (!(dice[i] in data))
            data[dice[i]] = 0;
        data[dice[i]] += 1;
    }

    for (var key in data)
        result.push(data[key]);

    return result;
}

module.exports = getPokerHand;