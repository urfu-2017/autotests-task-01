/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
 
 
function getPokerHand(dice) {
	var possible = '123456'; var k=new Array(0,0,0,0,0,0);
	if (!Array.isArray(dice)) 
        	throw new Error('Combination is not an array');
	if (dice.length>5)
		throw new Error('There are more than five elements');
	if (dice.length<5)
		throw new Error('There are less than five elements');
	for (var i = 0; i < 5; i++){
		if (isNaN(dice[i]))
			throw new Error('Оne or more elements are not a number');
		if (possible.indexOf(dice[i])== -1)
			throw new Error('There is a value not for the cube');
		k[dice[i]-1]++;
		}	
	var s = k.join("");
	if (s.indexOf(5)!=-1) return 'Покер';
	if (s.indexOf(4)!=-1) return 'Каре';
	if (s.indexOf(3)!=-1 && s.indexOf(2)!=-1) return 'Фулл хаус';
	if (s.indexOf(3)!=-1 && s.indexOf(2)==-1) return 'Тройка';
	if (s.indexOf(2)!=-1) 
		if (s.lastIndexOf(2)!=s.indexOf(2)) return 'Две пары';
	else return 'Пара';	 
	return 'Наивысшее очко';
}

module.exports = getPokerHand;

