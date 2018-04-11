/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    const combinations = ['Наивысшее очко', 'Пара', 'Две пары', 'Тройка', 'Фулл хаус', 'Каре', 'Покер'];

    var counter = [0, 0, 0, 0, 0, 0];

    for(var i = 0; i < 6; i++) {
        counter[dice[i] - 1]++;
    }

    var firstMaximumValue = 0;
    var secondMaximumValue = 0;
    for(var i = 0; i < 6; i++) {
        if (counter[i] >= firstMaximumValue) {
            secondMaximumValue = firstMaximumValue;
            firstMaximumValue = counter[i];
        }
    }

    switch (firstMaximumValue) {
        case 1:
            return combinations[0];
        case 2:
            return combinations[1 + Math.floor(secondMaximumValue / 2)];
        case 3:
            return combinations[3 + Math.floor(secondMaximumValue / 2)];
        default: // when firstMaximumValue = 4 or 5
            return combinations[1 + firstMaximumValue];
    }
}

module.exports = getPokerHand;
