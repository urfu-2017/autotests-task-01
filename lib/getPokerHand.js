/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    
    if (!Array.isArray(dice)) 
        throw new TypeError('You must pass an array');
            
    if (dice.length !== 5) 
        throw new TypeError('You must pass 5 cubes');
            
    for (let i = 0 ; i < dice.length; i++) {
        if (!Number.isInteger(dice[i])) 
            throw new TypeError('Values must be integers');
        
        if (dice[i] < 1 || dice[i] > 6 ) 
            throw new TypeError('Values must be in the range from 1 to 6');        
    }

    let countCombinations =  getCountCombinations(dice).sort();
    let count = countCombinations.reduce ((acc,element) => {    
            acc[0] += element
            if(element != 0)
                acc[1]++;  
        return acc;
    }, [0, 0]);

    switch(count[0]) {
        case 1:
            return 'Пара'
        break;

        case 2:
            if(count[1] == 2)
                return 'Две пары'   

            return 'Тройка'
        break;

        case 3:
        if(count[1] == 2)
            return 'Фулл хаус'   

        return 'Каре'
        break;

        case 4:
            return 'Покер'
        break;

        default:
            return 'Наивысшее очко'
        break;

    }  
}

function getCountCombinations(dice){
    dice.sort();
    return dice.reduce((acc, currentDice, currentIndex, array) => {
        
        if(currentDice == array[currentIndex + 1])
                acc[currentDice-1]++;
           return acc;
        }, [0,0,0,0,0,0]);
}


module.exports = getPokerHand;
