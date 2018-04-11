const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should Error `Не массив!`', () => {
        assert.throws(() => getPokerHand({}), 'Не массив!');
    });

    it('should Error `Значений должно быть 5!`', () => {
        assert.throws(() => getPokerHand([1,2]), 'Значений должно быть 5!');
    });

    it('should Error `Значения должны быть от 1 до 6!`', () => {
        assert.throws(() => getPokerHand([2,3,4,5,6,7]), 'Значения должны быть от 1 до 6!');
    });

    it('should Error `Значения должны быть от 1 до 6!`', () => {
        assert.throws(() => getPokerHand(['a',3,4,5,6,1]), 'Значения должны быть от 1 до 6!');
    });

    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [3, 3, 2, 3, 3]', () => {
        const actual = getPokerHand([3, 3, 2, 3, 3]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [1, 2, 1, 2, 1]', () => {
        const actual = getPokerHand([1, 2, 1, 2, 1]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [4, 5, 4, 4, 2]', () => {
        const actual = getPokerHand([4, 5, 4, 4, 2]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [6, 6, 0, 1, 0]', () => {
        const actual = getPokerHand([6, 6, 0, 1, 0]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [0, 2, 1, 3, 0]', () => {
        const actual = getPokerHand([0, 2, 1, 3, 0]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [6, 5, 3, 2, 0]', () => {
        const actual = getPokerHand([6, 5, 3, 2, 0]);

        assert.equal(actual, 'Наивысшее очко');
    });
});
