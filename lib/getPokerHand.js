function checkArray(data) {
    if (!Array.isArray(data))
        throw new Error("На вход должен подаваться массив");

    data.forEach(function(element) {
        if (!Number.isInteger(element)) {
            throw new Error("На вход должны подаваться целые числа");
        }
        if (element < 1 || element > 6) {
            throw new Error("Числа могут быть только из диапазона от 1 до 6");
        }
    });

    if (data.length !== 5)
        throw new Error("На вход должны подаваться 5 элементов");

}

function getMax(data) {
    return Math.max.apply(null, data);
}

function getRepeat(data) {
    var result = {};
    data.forEach(function(element){
        result[element] = result[element] + 1 || 1;
    });

    return result;
}

function getPokerHand(dice) {
    checkArray(dice);
    const repeats = getRepeat(dice);
    switch (Object.keys(repeats).length) {
        case 1:
            return 'Покер';
        case 2:
            if (getMax(Object.keys(repeats).map(
                    function(key) { return repeats[key];})) === 4)
                return 'Каре';
            return 'Фулл Хаус';
        case 3:
            if (getMax(Object.keys(repeats).map(
                    function(key) { return repeats[key];})) === 3)
                return 'Тройка';
            return 'Две пары';
        case 4:
            return 'Пара';
        default:
            return 'Наивысшее очко';
    }
}

module.exports = getPokerHand;
