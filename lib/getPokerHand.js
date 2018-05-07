/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (!Array.isArray(dice)) {
        throw new TypeError('You should enter Array');
    }
    if (dice.length !== 6) {
        throw new TypeError('Need throw 6 dices');
    }
    for (i=0 ; i < dice.length; i++) {
        if (!isInteger(dice[i])) {
            throw new TypeError('Values must be integers');
        }
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

function isInteger(num) {
    return (num ^ 0) === num;
  }


module.exports = getPokerHand;
