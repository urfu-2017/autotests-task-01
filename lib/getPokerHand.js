/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    const cardsCounter = {};
    if (!Array.isArray(dice)) {
        throw new TypeError('It is not a Array');
    }
    if (dice.length !== 5) {
        throw new TypeError('There is no 5 cards');
    }
    dice.forEach(card => {
        card = Number.parseInt(card);
        if (!card) {
            throw new TypeError('Can\'t convert String to Number');
        }
        if (card <= 0 || card > 6) {
            throw new TypeError('No such card');
        }
        if (!cardsCounter[card]) {
            cardsCounter[card] = 1;
        } else {
            cardsCounter[card]++;
        }
    });
    const cardsValues = Object.values(cardsCounter);

    return combinations[cardsValues.length](cardsValues);
}

const combinations = {
    1: () => 'Покер',
    2: cards => {
        if (cards.includes(1)) {
            return 'Каре';
        }

        return 'Фулл хаус';
    },
    3: cards => {
        if (cards.includes(3)) {
            return 'Тройка';
        }

        return 'Две пары';
    },
    4: () => 'Пара',
    5: () => 'Наивысшее очко'
};

module.exports = getPokerHand;
