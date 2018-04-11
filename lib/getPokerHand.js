/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (dice.length != 5) {
        return 'Wrong number of dices';
    }
    else {
        var dice_count = [0, 0, 0, 0, 0, 0];
        for (i = 0; i < dice.length; i++) {
            if ((dice[i] < 1) || (dice[i] > 6)) {
                return 'Change your dices, cheater';
            }
            else { dice_count[dice[i] - 1]++; }
        }
        var combo = dice_count.sort().reverse().slice(0,2).join('');
        switch(combo) {
            case '50': return 'Покер';
            case '41': return 'Каре';
            case '32': return 'Фулл хаус';
            case '31': return 'Тройка';
            case '22': return 'Две пары';
            case '21': return 'Пара';
            case '11': return 'Наивысшее очко';
        }
    }
}

module.exports = getPokerHand;
