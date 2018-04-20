/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
var countOfDice = 5;
var maxDiceValue = 6;
var diceCount = [];

function getPokerHand(dice) {
    setDiceCount(dice);
    if (isYahtzee()) {
        return 'Покер';
    }
    if (isFourOfKind()) {
        return 'Каре';
    }
    if (isFullHouse()) {
        return 'Фулл хаус';
    }
    if (isThreeOfKind()) {
        return 'Тройка';
    }
    if (isTwoPair()) {
        return 'Две пары';
    }
    if (isPair()) {
        return 'Пара';
    }
    return 'Наивысшее очко';
}

function setDiceCount(dice) {
    if (!Array.isArray(dice)) {
        throw new Error('Input should be an array');
    }
    if (dice.length !== countOfDice) {
        throw new Error('Count of dice throw should equals ' + countOfDice);
    }
    diceCount = new Array(maxDiceValue).fill(0);
    for (var i = 0; i < dice.length; i++) {
        if (!Number.isInteger(dice[i])) {
            throw new Error('Dice should contains only integer numbers');
        }
        if (!(dice[i] >= 1 && dice[i] <= 6)) {
            throw new Error('Dice should contains only numbers from 1 to 6');
        }
        diceCount[dice[i] - 1]++;
    }
}

function isYahtzee() {
    return diceCount.includes(countOfDice);
}

function isFourOfKind() {
    return diceCount.includes(countOfDice - 1);
}

function isFullHouse() {
    return diceCount.includes(countOfDice - 2) && diceCount.includes(countOfDice - 3);
}

function isThreeOfKind() {
    return diceCount.includes(countOfDice - 2);
}

function isTwoPair() {
    var pairCount = 0;
    for (var i = 0; i < diceCount.length; i++) {
        if (diceCount[i] === 2) {
            pairCount++;
        }
    }
    return pairCount === 2;
}

function isPair() {
    return diceCount.includes(countOfDice - 3);
}

module.exports = getPokerHand;
