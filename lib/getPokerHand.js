/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    var counts = [0, 0, 0, 0, 0, 0];
    for(var i = 0; i < dice.length; i++) {
        counts[dice[i] - 1]++;
    }
    var two = 0;
    var three = 0;
    
    for(var i = 0; i < 6; i++) {
        if(counts[i] == 5) return 'Покер';
        if(counts[i] == 4) return 'Каре';
        if(counts[i] == 3) three++;
        if(counts[i] == 2) two++;
    }
    
    if(three == 1) {
        if(two > 0) return 'Фулл хаус';
        return 'Тройка';
    }
    
    if(two == 2) return 'Две пары';
    if(two == 1) return 'Пара';
    return 'Наивысшее очко';
}

module.exports = getPokerHand;
