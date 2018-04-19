/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    /*проверка входных данных*/
    if (!Array.isArray(dice)) // Проверим, массив ли введён.
    {
        throw new Error("Введён не массив");
    }
    const l = dice.length;
    if (l>5) throw new Error ('Длина больше требуемой');
    if (l<5) throw new Error ('Длина меньше требуемой');
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
    }
    /*проверка комбинаций*/
    const  count=[0,0,0,0,0,0];
    for (i = 0; i < 5; i++)
        count[dice[i]-1]++;
    for (i = 0; i < 5; i++)
    {
        if (count[i]==5) {return 'Покер'; break;}
        else if ((count[i]==4)) {return 'Каре'; break;}
    }
    if ((count[0]==3||count[1]==3||count[2]==3||count[3]==3||count[4]==3||count[5]==3)&&(count[0]==2||count[1]==2||count[2]==2||count[3]==2||count[4]==2||count[5]==2))
    {return 'Фулл хаус';}
    else if  (count[0]==3||count[1]==3||count[2]==3||count[3]==3||count[4]==3||count[5]==3)
    {return 'Тройка';}
    var num=0;
    for (i = 0; i < 5; i++) if (count[i]==2) num++;
    if (num==2) {return 'Две пары';}
    else if(num==1) {return 'Пара';}
    else return 'Наивысшее очко';
}

module.exports = getPokerHand;

