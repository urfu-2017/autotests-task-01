/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    if (!Array.isArray(dice) || dice.length !== 5 ||
        Math.max(dice) > 6 || Math.min(dice) < 1 || isNumberArray(dice)) {
        return 'Некорректный ввод';
    }

    let diceDict = {};
    dice.forEach(dice => {
        if (diceDict[dice]) {
            diceDict[dice] += 1;
        } else {
            diceDict[dice] = 1;
        }
    });

    let diceCount = Object.values(diceDict).sort((a, b) => b - a);
    let сountOfDifferent = diceCount.length;

    if (сountOfDifferent === 1) {
        return 'Покер';
    } else if (сountOfDifferent === 2 && diceCount[0] === 4) {
        return 'Каре';
    } else if (сountOfDifferent === 2 && diceCount[0] === 3) {
        return 'Фулл хаус';
    } else if (сountOfDifferent === 3 && diceCount[0] === 3) {
        return 'Тройка';
    } else if (сountOfDifferent === 3 && diceCount[0] === 2) {
        return 'Две пары';
    } else if (сountOfDifferent === 4 && diceCount[0] === 2) {
        return 'Пара';
    } else {
        return 'Наивысшее очко';
    }
}

function isNumberArray(array) {
    array.every(elem => {
        return (!isNaN(Number(elem)));
    });
}

module.exports = getPokerHand;
