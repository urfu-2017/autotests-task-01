/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (!Array.isArray(dice) || dice.length !== 5) {
        throw new Error("Bad input parameter to function")
    }
    if (!dice.every(isBoneSide)) {
        throw new Error("Bad dice value")
    }

    var frequency = getFrequency(dice);
    frequency.sort();
    frequency.reverse();
    return getCombination(frequency[1], frequency[2])
}

function isBoneSide(value) {
    return Number.isInteger(value) && value >= 1 && value <= 6;
}

function getFrequency(array) {
    let freq = new Array(0);
    for (let i = 0; i < array.length; i++) {
        if (freq[array[i]]) {
            freq[array[i]]++;
        } else {
            freq[array[i]] = 1;
        }
    }

    return freq;
};

function getCombination(max1, max2) {
    switch (max1) {
        case 5:
            return "Покер";
        case 4:
            return "Каре";
        case 3:
            return max2 === 2 ? "Фулл хаус" : "Тройка"
        case 2:
            return max2 === 2 ? "Две пары" : "Пара"
        case 1:
            return "Наивысшее очко";
        default:
            throw new Error("Unexcpected value");
    }
}

module.exports = getPokerHand;
