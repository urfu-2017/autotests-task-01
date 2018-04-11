/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */

function getPokerHand(dice) {

    if (!Array.isArray(dice)) 
    throw new TypeError('You must enter an array');
    
    if (dice.length !== 5) 
    throw new TypeError('You need to throw 5 dice');

    for (let i = 0 ; i < dice.length; i++) {
        
        if (!Number.isInteger(dice[i])) 
            throw new TypeError('You must enter an integer');
               
        if (dice[i] < 1 || dice[i] > 6 ) 
            throw new TypeError('Range of numbers on dice from 1 to 6');
    }
                 
    let CountСoncurrences =  getCountСoncurrences(dice);
        if( CountСoncurrences == '1,1,1,1,1')
            { return 'Кикер'}
        else if( CountСoncurrences == '1,1,1,2')
            { return 'Пара'}
        else if( CountСoncurrences == '1,2,2')
            { return 'Две Пары'}
        else if( CountСoncurrences == '1,1,3')
            { return 'Тройка'}  
        else if( CountСoncurrences == '2,3')
            { return 'Фул Хаус'}  
        else if( CountСoncurrences == '1,4')
            { return 'Каре'}
        else if( CountСoncurrences == '5')
            { return 'Покер'}
}

function getCountСoncurrences(dice){
  
        let concurrences = [], prev;
    
    dice.sort();
    for ( let i = 0; i < dice.length; i++ ) {
        if ( dice[i] !== prev ) {
            concurrences.push(1);
        } else {
            concurrences[concurrences.length-1]++;
        }
        prev = dice[i];
    }
    concurrences.sort();
    return concurrences;
}

module.exports = getPokerHand;