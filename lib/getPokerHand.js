/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function contains(what)
{
    if(what.length!=5 || !Array.isArray(what))   //эрэй из эрэй ВАТ???
    {
        throw new Error("expected array of length 5");
    }
    var dictionary=([1,2,3,4,5,6]);
    for(var i=0; i<5; i++)
    {
        if(dictionary.indexOf(what[i]) == -1)
        {
            throw new Error(i + " array element is not a valid number"); 
        }
    }
    return true;
}
function getPokerHand(dice) {
    contains(dice);
    var diceCount=([0,0,0,0,0,0]);
    for(var i=0; i<dice.length; i++)
    {
        diceCount[dice[i]-1]++;
    }
    diceSorted=diceCount.slice().sort().reverse();
    switch(diceSorted[0]) {
        case 5:
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            if (diceSorted[1] === 2) 
            {
                return 'Фулл хаус';
            }
            return 'Тройка';
        case 2:
            if (diceSorted[1] === 2)  
            {
                return 'Две пары';
            }
            return 'Пара';
        case 1:
            {
                return 'Наивысшее очко';
            }
        default:
            throw new Error('switch got ' + diceSorted[0]);
    }
}

module.exports = getPokerHand;
