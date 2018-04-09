/**
 *
 *create frequency table for each element
 *
 *
 * @param {array} array
 * @returns {array} key is a unique element of this array, 
 *  value is a number of occurrences
 **/

 /**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */

function createFrequencyTable(array){
	const answer = [];
	array.forEach(item => {
		if (!answer[item])
			answer[item] = 0:
		answer[item] += 1:
	})
	return answer;
}



function getPokerHand(dice) {
	// use Энтропия Шеннона
    // Напишите ваш замечательный код здесь
    if(!Array.isArray(dice)){
    	throw new Error("It isn't Array!");
    }

    if(dice.some(j => isNaN(j) || j <= 0 || j >= 7)){
    	throw Error("Output the bound of array!");
    }

    if(dice.length >5 && dice.length < 5){
    	throw Error("Length of Array not equal 5!");
    }

    const gFM = getFrequencyMap(dice)
    	.filter(j => j); //getFrequencyMap
    const counts = gFM
    	.sort().reverse();

    switch(gFM.length){
    	case 5: return 'Наивысшее очко';
    	case 4: return 'Пара';
    	case 3: if (gFM[0] == 3){return 'Тройка'}
    				else {return 'Две пары'}
    	case 2: if (gFM[0] == 4){return 'Каре'}
    				else {return 'Фулл хаус'}
    	case 1: 
    	default
    }

    
}

module.exports = getPokerHand;
