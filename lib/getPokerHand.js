/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь

    if (!Array.isArray(dice)) throw new Error('Не массив!');
    if (dice.length !== 5) throw new Error('Значений должно быть 5!');
    if (dice.every(value => 1 <= value && value >= 6)) throw new Error('Значения должны быть от 1 до 6!');

    let valuesDice = Object.values(dice.reduce((dict, currentValue) => {
        dict[currentValue] = dict[currentValue] ?  dict[currentValue] += 1 : 1;

        return dict;
    }, {})).sort().join();

    let nameByDice = {
        '5' : 'Покер',
        '1,4': 'Каре',
        '2,3': 'Фулл хаус',
        '1,1,3': 'Тройка',
        '1,2,2': 'Две пары',
        '1,1,1,2': 'Пара',
        '1,1,1,1,1': 'Наивысшее очко',
    };

    return nameByDice[valuesDice];
}

module.exports = getPokerHand;
