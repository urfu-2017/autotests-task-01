/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    const DICE_LENGTH = 5;
    if (!dice || dice && !Array.isArray(dice)) {
        throw new Error('dice is not an array');
    }
    if (dice.length !== DICE_LENGTH) {
        throw new Error('dice length should be equals to ' + DICE_LENGTH);
    }
    // индексы - позиции первого вхождения числа в dice, значения - количество повторов чисел в dice
    // (отвязка от конкретных значений)
    var counts = [];
    // проверяем, что пришло на вход и инициализируем счетчики чисел нулями
    for (var i = 0; i < DICE_LENGTH; i++) {
        if (typeof dice[i] !== 'number' || typeof dice[i] === 'number' && dice[i] % 1 !== 0)
        {
            throw new Error('dice should contain only integer numbers');
        }
        if (dice[i] < 1 || dice[i] > 6)
        {
            throw new Error('dice should contain only positive integer numbers between 1 and 6');
        }
        counts[i] = 0;
    }
    // считаем кол-во чисел
    for (i = 0; i < dice.length; i++) {
        counts[dice.indexOf(dice[i])]++;
    }
    // сортируем по убыванию для более удобного доступа к информации
    // знаю, можно было через sort() -> reverse(), но ручками тоже можно
    counts.sort(function(a, b) {
        a = +a;
        b = +b;

        return a === b ? 0 : (a < b ? 1 : -1);
    });
    // проверяем комбинацию
    switch(counts[0]) {
        case 5:
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            switch (counts[1]) {
                case 2:
                    return 'Фулл хаус';
                default:
                    return 'Тройка';
            }
        case 2:
            switch(counts[1]) {
                case 2:
                    return 'Две пары';
                default:
                    return 'Пара';
            }
        default:
            return 'Наивысшее очко';
    }
}

module.exports = getPokerHand;
