/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    var incoming = [0, 0, 0, 0, 0, 0];
    if (!Array.isArray(dice)) // Проверим, массив ли введён.
    {
        throw new Error("Введён не массив");
    }
    if (dice.length!==5) // Проверим длину массива.
    {
        throw new Error("Длина массива не равна 5.");
    }
    for(var i = 0; i < dice.length; i++)
    {
        if (typeof dice[i]!=="number") // Проверим, числа ли в массиве.
        {
            throw new Error(/*i + "-й элемент массива не является числом."*/"Есть нечисловые значения");
        }
        if (dice[i]%1!==0) // Проверим, целое ли число.
        {
            throw new Error(/*i + "-й элемент массива не является целым числом."*/"Есть дробные значения");
        }
        if (dice[i]<1 || dice[i]>6) // Проверим, что они в диапазоне 1-6.
        {
            throw new Error(/*i + "-й элемент массива не попадает в диапазон игральной кости."*/"Есть значения за пределами диапазона кости");
        }
        //if (incoming[dice[i]]===undefined) // Такой элемент есть?
        //{
        //    incoming[dice[i]] = 1; // Добавляем элемент в массив, если его нет.
        //}
        //else
        //{
        //    incoming[dice[i]]++; // В противном случае увеличиваем количество совпадений с известным элементом в архиве.
        //}
        incoming[dice[i]]++;
    }
    
    sortedAndReversed=incoming.sort().reverse(); 
    switch(sortedAndReversed[0])
    { 
        case 5: 
            return 'Покер'; 
        case 4: 
            return 'Каре'; 
        case 3: 
            if (sortedAndReversed[1] === 2)
                { 
                    return 'Фулл хаус'; 
                } 
                return 'Тройка'; 
        case 2: 
            if (sortedAndReversed[1] === 2)
            { 
                return 'Две пары'; 
            } 
            return 'Пара'; 
        case 1:
        default: 
            return 'Наивысшее очко'; 
    }
}

module.exports = getPokerHand;
