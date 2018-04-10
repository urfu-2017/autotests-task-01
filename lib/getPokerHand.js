/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */

const cases = {
    '11111': 'Наивысшее очко',
    '2111': 'Пара',
    '221': 'Две пары',
    '311': 'Тройка',
    '32': 'Фулл хаус',
    '41': 'Каре',
    '5': 'Покер'
}

function getPokerHand(dice) {

    if(!Array.isArray(dice)) throw new Error('NAN')

    if(dice.length !== 5) throw new Error('not right length');

    let nan = dice.every(element => typeof element === 'number');
    if(!nan) throw new Error('NAN in array'); 

    let integers = dice.every(element => (element ^ 0) === element);
    if(!integers) throw new Error ('not an int in array');

    let inRange = dice.every(element => element>0 && element<6);
    if(!inRange) throw new Error ('out of range');

    let countEl = {};
    let i = 1;
    dice.forEach(element => {
        if(element in countEl) {
            countEl[element]++;   
        } else {
            countEl[element] = 1;
        }
    });
    
    return cases[Object.values(countEl).sort((a,b)=>b-a).join('')];
}

module.exports = getPokerHand;