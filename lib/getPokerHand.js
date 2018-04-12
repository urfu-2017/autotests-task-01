
function calculateEnteres(dice) {
    list = [0,0,0,0,0,0,0];
    for (i= 0; i < dice.length; i++) {
        if (dice[i] < 0 || dice[i] > 6 ) {
            throw new TypeError('Значения не должны быть меньше 1 и больше 6');
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
         throw new Error('Значения не должны быть меньше 1 и больше 6');
    }
	
	if (isInteger(dice)) {
         throw new Error('Значения должны быть числами');
	}

    const enteries = calculateEnteres(dice);

    switch(enteries[0]){
    	case 5: 
            return 'Покер';
		case 4: 
            return 'Каре'; 
        case 3: 
            if (enteries[1] === 2)
                { 
                    return 'Фулл хаус'; 
                } 
                return 'Тройка'; 
        case 2: 
            if (enteries[1] === 2)
            { 
                return 'Две пары'; 
            } 
            return 'Пара'; 
        case 1:
        default: 	
            return 'Наивысшее очко'; 
    }
 }
module.exports = getPokerHand;
