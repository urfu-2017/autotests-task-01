/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    /*проверка входных данных*/
    const l = dice.length;
    if (l>5) return 'Длина больше требуемой';
    if (l<5) return 'Длина меньше требуемой';
    for (i = 0; i < 5; i++)
    {if (dice[i]!=1||dice[i]!=2||dice[i]!=3||dice[i]!=4||dice[i]!=5||dice[i]!=6||) return 'Введенных значений нет на игральной кости'; break;}

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

