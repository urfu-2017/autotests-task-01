/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    var conc = [0,0];
    var check = false;
    const result = ['Пара','Тройка','Каре','Покер','Две пары','Фулл хаус','Наивысшее очко'];

    if (!Array.isArray(dice)) 
    throw new TypeError('please pass an array');

    if (dice.length != 5) 
    throw new TypeError('no five dice');
    for(var i = 0; i < dice.length;i++)
    {
        if(!Number.isInteger(dice[i]))
        throw new TypeError('Value no integer');
        if(dice[i]<1 || dice[i]>6 )
        throw new TypeError('The dice must be no more than 6 and not less than 1');
    }
    
    dice.sort();
    for(var i = 0; i< dice.length-1;i++)
    {
    if(dice[i]==dice[i+1] && check==false)
    conc[0]++;
    else if (dice[i]==dice[i+1] && check==true)
    conc[1]++;
    else if (dice[i]!=dice[i+1])
    check=true;
    }
    check = false;
    conc.sort();

    for(var i = 1; i < 5; i++)
    {
        if(conc[1] == i && conc[0] != 1)
        return result[i-1];
        if(conc[1] == i && conc[0] == 1)
        return result[i+3]
    }
    return result[6];
}
module.exports = getPokerHand;
