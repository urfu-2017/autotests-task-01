
function calculateEnteres(dice) {
    list = [0,0,0,0,0,0,0];
    for (i= 0; i < dice.length; i++) {
        if (dice[i] < 0 || dice[i] > 6 ) {
            throw new TypeError('Значения должны быть в промежутке от 1 до 6');
        }
        count = dice[i];
        list[count] = list[count] + 1; 
    }
    function compareNumbers(a, b) {
        return b - a;
      }
    list.sort(compareNumbers);
    return list;
}


function isInteger(array) {
   return array.some(isNaN);
}

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    if (!Array.isArray(dice)) {
       throw new Error('Введите массив');
    }
    if (dice.length !== 5) {
        throw new Error('Введите значения 6 кубиков');
    }

    if (Math.min(dice) < 1 || Math.max(dice) > 6) {
         throw new Error('Значения не должны бытm меньше 1 и больше 6');
    }
	
	if (isInteger(dice)) {
         throw new Error('Значения должны быть числами');
	}

	const enteries = calculateEnteres(dice);
    if (enteries[0] == 5)
        return 'Покер';
    if (enteries[0] == 4)
        return 'Каре';
    if (enteries[0] == 3 && enteries[1] == 2)
        return 'Фулл хаус';
    if (enteries[0] == 3 && enteries[1] !== 2)
        return 'Тройка';
    if (enteries[0] == 2 && enteries[1] == 2)
        return 'Две Пары';
    if (enteries[0] == 2)
        return 'Пара';
    if (enteries[0] == 1)
        return Math.max.apply(null, dice);    
}

 

module.exports = getPokerHand;
