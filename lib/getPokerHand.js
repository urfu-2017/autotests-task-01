/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
'use strict';
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь

    if(arguments.length!==1){
        throw new Error('More than one argument passed');
    }
   return getCombination(dice);


  function getCombination(dice) {
      if(!Array.isArray(dice)) {
          throw new Error('Current value is not array');
      }
      if(dice.length!==5){
          throw new Error('Current array lenght is not 5');
      }
      if(!dice.every(isNumber))
      {
          throw new Error('Some of the elements of the array not number');
      }
      if(!dice.every(isPositive))
      {
          throw new Error('Some of the elements of the array are less than 0');
      }
      if(!dice.every(isBigEnough))
      {
          throw new Error('Some of the elements of the array are larger than 6');
      }
      if(!dice.every(isInt))
      {
          throw new Error('Some of the elements of the array not int');
      }

      let tmp=[];
      for(let i = 0; i < dice.length; i++) {
          tmp[dice[i]-1]=(tmp[dice[i]-1] ? tmp[dice[i]-1] + 1 : 1);
        }

      tmp.sort(compareNumbers);
        switch( tmp[0]) {
            case 5:
                return 'Покер';
            case 4:
                return 'Каре';
            case 3:
                if (tmp[1] === 2)
                    return 'Фулл хаус';
                else 
                    return 'Тройка';
            case 2:
                tmp.sort(compareNumbers);
                if (tmp[1] === 2)
                    return 'Две пары';
                else
                    return 'Пара';
            default:
                return 'Наивысшее очко';
                }

                return 'Упс';
  }
    function compareNumbers(a, b) {
        if (a > b)
            return -1;
        else if (a < b)
            return 1;
        else
            return 0;
    }

    function isPositive(number) {
        return number > 0;
    }

    function isBigEnough(element, index, array) {
        return element <= 6;
    }
    function isInt(element) {
        return element % 1 === 0;
    }

    function isNumber(a) {
        return typeof(a)=='number';
    }
}


module.exports = getPokerHand;
