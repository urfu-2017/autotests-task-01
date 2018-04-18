/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (!Array.isArray(dice)) { 
        throw new TypeError('Неправильный формат ввода'); 
        }

    if (dice.length > 5 || dice.length < 5) { 
        throw new TypeError('Неправильное число костей'); 
        }
    var frequency = [0,0,0,0,0,0];

    for (var i = 0; i < 5; i++) {
        if (isNaN(dice[i]) || dice[i] > 6 || dice[i] < 1 || dice[i] % 1 !== 0) { 
            throw new TypeError('Неправильное значение на кости'); 
            }

        frequency[dice[i]-1]++;
     }
     
    var norma = 0;
    
    for (var i = 0; i < 6; i++) {
        norma = norma + frequency[i]*frequency[i];
     }
    
    if (norma === 25) 
        return 'Покер';
    
    if (norma === 17) 
        return 'Каре';

    if (norma === 13) 
        return 'Фулл Хаус';

    if (norma === 11) 
        return 'Тройка';

    if (norma === 9) 
        return 'Две Пары';

    if (norma === 7) 
        return 'Пара';

    if (norma === 5) 
        return 'Старшее Очко';
}

module.exports = getPokerHand;
