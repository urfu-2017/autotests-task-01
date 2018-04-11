const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    // Напишите тесты на ваш замечательный код здесь
    it('should return `Пара` for [1, 6, 3, 4, 6]', () => {
        const actual = getPokerHand([1, 6, 3, 4, 6]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Фулл хаус` for [1, 4, 1, 4, 4]', () => {
        const actual = getPokerHand([1, 4, 1, 4, 4]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Каре` for [3, 3, 2, 3, 3]', () => {
        const actual = getPokerHand([3, 3, 2, 3, 3]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Наивысшее очко` for [3, 2, 1, 5, 4]', () => {
        const actual = getPokerHand([3, 2, 1, 5, 4]);

        assert.equal(actual, 'Наивысшее очко');
    });

    it('should return `Две пары` for [1, 6, 4, 4, 6]', () => {
        const actual = getPokerHand([1, 6, 4, 4, 6]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Тройка` for [2, 5, 2, 3, 2]', () => {
        const actual = getPokerHand([2, 3, 2, 3, 2]);

        assert.equal(actual, 'Тройка');
    });
});
