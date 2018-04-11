/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    if(arguments.length !==  1 ){
        throw new Error('More than one argument');
    }
    if (dice.length !== 5) {
        throw new Error('There must be five elements');
    }
    if(!dice.every(isInteger))
    {
        throw new Error('All elements must be integers');
    }
    if(!dice.every(lessThan))
    {
        throw new Error('All elements must be less than 7');
    }
    if(!dice.every(greaterThan))
    {
        throw new Error('All elements must be more than 0');
    }
    let temp = [0,0,0,0,0,0];
    for (var i = 0; i < dice.length; i++) {
        temp[dice[i]-1]++;
      }

    let asNumbers = (a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    }
    temp.sort(asNumbers); // [1, 2, 10]

    switch(temp[5]){
        case 5: return 'Покер';
        case 4: return 'Каре';
        case 3:
            if (temp[4] === 2)
                return 'Фулл хаус';
            else return 'Тройка';
        case 2:
            if (temp[4] === 2)
                return 'Две пары';
            else return 'Пара';

        case 1:  return 'Наивысшее очко';

    }
    function lessThan(a) {
        return (a < 7);
    }
    function greaterThan(a) {
        return (a > 0);
    }
    function isInteger(num) {
        return (num ^ 0) === num;
    }
}

module.exports = getPokerHand;
