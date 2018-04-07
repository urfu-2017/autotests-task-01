/**
 * Сопоставляет каждому уникальному элементу массива 
 * колличество его вхождений.
 *
 * @param {Array} array
 * @returns {Array} ключ - уникальный элемент даного массива, 
 *                  значение - количество вхождений.
 */
function getFrequencyMap(array) {
    const result = []
    array.forEach(item => {
        if (!result[item])
            result[item] = 0
        result[item] += 1
    })
    return result
}


/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {

    if (!Array.isArray(dice))
        throw Error("dice type is not Array")

    if (dice.length != 5)
        throw Error(`dice.length(${dice.length}) != 5`)

    if (dice.some(i => isNaN(i) || i < 1 || i > 6))
        throw Error("dice array should contains only numbers in range [1..6]")

    const rawCounts = getFrequencyMap(dice).filter(i => i).sort().reverse()

    switch(rawCounts.length) {
        case 1: return 'Покер'        
        case 2: if (rawCounts[0] == 4) { return 'Каре' } else { return 'Фулл хаус' }
        case 3: if (rawCounts[0] == 3) { return 'Тройка' } else { return 'Две пары' }
        case 4: return 'Пара'
        case 5: return 'Наивысшее очко'
        default: throw Error("Unexpected combination")
    }
}

module.exports = getPokerHand;
