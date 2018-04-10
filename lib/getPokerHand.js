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
    var largestValues = getTwoLargestValue(frequency);
    return getCombination(largestValues.biggest, largestValues.nextBiggest)
}

function isBoneSide(value) {
    return typeof(value) == "number" && value >= 1 && value <= 6;
}

function getFrequency(array) {
    var freq = [];

    for (let i = 0; i < array.length; i++) {
        if (freq[array[i]]) {
            freq[array[i]]++;
        } else {
            freq[array[i]] = 1;
        }
    }

    return freq;
};

function getTwoLargestValue(array) {
    var biggest = -Infinity;
    var nextBiggest = -Infinity;

    for (var i = 0, n = array.length; i < n; ++i) {
        var nr = +array[i];

        if (nr > biggest) {
            nextBiggest = biggest;
            biggest = nr;
        } else if (nr <= biggest && nr > nextBiggest) {
            nextBiggest = nr;
        }
    }

    return {
        biggest: biggest,
        nextBiggest: nextBiggest
    };
}

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
