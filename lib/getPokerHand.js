/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
var countOfDice = 5;
var maxDiceValue = 6;
var diceCount = [];

function getPokerHand(dice) {
    setDiceCount(dice)
    if(isYahtzee(dice))
        return 'Покер';
    if(isFourOfKind(dice))
        return 'Каре';
    if(isFullHouse(dice))
        return 'Фулл хаус';
    if(isThreeOfKind(dice))
        return 'Тройка';
    if(isTwoPair(dice))
        return 'Две пары';
    if(isPair(dice))
        return 'Пара';
    return 'Наивысшее очко';
}

function setDiceCount(dice){
    if(!Array.isArray(dice))
        throw new Error('Input should be an array')
    if(dice.length != countOfDice){
        throw new Error("Count of dice throw should equals " + countOfDice)
    }
    diceCount = getInitializedDiceCount(maxDiceValue)
    for(var i = 0; i < dice.length; i++){
        if(!Number.isInteger(dice[i]) || !(dice[i] >= 1 && dice[i] <= 6))
            throw new Error("Dice should contains only numbers from 1 to 6")
        diceCount[dice[i] - 1]++;
    }
}

function isYahtzee(dice){
    return diceCount.includes(countOfDice);
}

function isFourOfKind(dice){
    return diceCount.includes(countOfDice - 1);
}

function isFullHouse(dice){
    return diceCount.includes(countOfDice - 2) && diceCount.includes(countOfDice - 3)
}

function isThreeOfKind(dice){
    return diceCount.includes(countOfDice - 2)
}

function isTwoPair(dice){
    var pairCount = 0;
    for(var i = 0; i < diceCount.length; i++){
        if(diceCount[i] == 2)
            pairCount++;
    }
    return pairCount == 2;
}

function isPair(dice){
    return diceCount.includes(countOfDice - 3)
}

function getInitializedDiceCount(length){
    var result = [];
    for (var i = 0; i < length; i++)
        result[i] = 0;
    return result;
}
module.exports = getPokerHand;
