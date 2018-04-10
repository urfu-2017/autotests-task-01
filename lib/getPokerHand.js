const POKER_HAND = require('./const').POKER_HAND;

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (!dice || !Array.isArray(dice))
        throw new TypeError('Dice argument must be an array');
    if (dice.length != 5)
        throw new TypeError('Dice array length must be 5');
    if (!dice.every(element => Number.isInteger(element) && element > 0 && element < 7))
        throw new TypeError('Dice must be an integer from 1 to 6');

    const freqDictionary = dice.reduce((dict, currentDice) => {
        dict[currentDice] = dict[currentDice] === undefined ? 1 : dict[currentDice] + 1;
        return dict;
    }, {});

    const frequencies = Object.values(freqDictionary).sort();
    
    switch (frequencies[frequencies.length - 1]) {
        case 5:
            return POKER_HAND.POKER;
        case 4:
            return POKER_HAND.FOUR_OF_A_KIND;
        case 3:
            if (frequencies[frequencies.length - 2] === 2)
                return POKER_HAND.FULL_HOUSE;
            return POKER_HAND.THREE_OF_A_KIND;
        case 2:
            if (frequencies[frequencies.length - 2] === 2)
                return POKER_HAND.TWO_PAIR;
            return POKER_HAND.PAIR;
        default:
            return POKER_HAND.HIGH_CARD;
    }
}

module.exports = getPokerHand;
