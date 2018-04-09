/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (dice.length!=5) throw new Error("Введите список из 5 костей.");

    for (var i in dice) {
        if (dice[i] <1 || dice[i]>6) throw new Error("Кость может принимать значения только от 1 до 6.");
    }

    var ElementsCount=getElementsCount(dice);
    var length=getDictLength(ElementsCount);

    if (length ==1) return "Покер";
    if (length==4) return "Пара";

    var values=getDictValues(ElementsCount);
    if (length==2){
        if (values.indexOf(4)!=-1) return "Каре";
        else return "Фулл хаус";
    }
    if (length==3){
        if (values.indexOf(3)!=-1) return "Тройка";
        else return "Две пары";
    }
    return "Наивысшее очко";
}

function getDictValues(dict) {
    var values = [];
    for (var key in dict) {
        values.push(dict[key]);
    }
    return values;
}

function getElementsCount(dice){
    var ElementsCount={};
    dice.forEach(function (item) {
        if (item in ElementsCount){
            ElementsCount[item]+=1;
        }
        else {
            ElementsCount[item]=1;
        }
    });
    return ElementsCount;
}

function getDictLength(dict){
    var length = 0;
    for (var key in dict) {
        length++;
    }
    return length;
}

module.exports = getPokerHand;
