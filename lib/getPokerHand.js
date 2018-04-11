/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь    
    const combination = {
        '0,0,0,0,0,1': 'Пара',
        '0,0,0,0,1,1': 'Две пары',
        '0,0,0,0,0,2': 'Тройка',
        '0,0,0,0,1,2': 'Фулл хаус',
        '0,0,0,0,0,3': 'Каре',
        '0,0,0,0,0,4': 'Покер',
        '0,0,0,0,0,0': 'Наивысшее очко'
    }
    
    if (!Array.isArray(dice)) 
        throw new TypeError('You must pass an array');
            
    if (dice.length !== 5) 
        throw new TypeError('You must pass 5 cubes');
            
    for (var i = 0 ; i < dice.length; i++) {
        if (!Number.isInteger(dice[i])) 
            throw new TypeError('Values must be integers');   

        if (dice[i] < 1 || dice[i] > 6 ) 
            throw new TypeError('Values must be in the range from 1 to 6'); 
    }  
    
    var countCombinations =  getCountCombinations(dice).sort();
    return  combination[countCombinations.toString()];
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