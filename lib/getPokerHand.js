/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    let frequencies = {};
	dice.forEach(d => {frequencies[d] = (frequencies[d] || 0) + 1});
	const highestTwo = Object.keys(frequencies).sort((a, b) => frequencies[a] < frequencies[b]);
	switch (frequencies[highestTwo[0]]) {
		case 5:
		    return 'Покер';
		case 4:
		    return 'Каре';
		case 3:
		    if (frequencies[highestTwo[1]] === 2)
				return 'Фулл хаус'
			return 'Тройка'
		case 2:
		    if (frequencies[highestTwo[1]] === 2)
				return 'Две пары'
			return 'Пара';
		default:
		    return 'Наивысшее очко';
	}
}

module.exports = getPokerHand;
