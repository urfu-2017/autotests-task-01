const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [2, 1, 2, 2, 2]', () => {
        const actual = getPokerHand([2, 1, 2, 2, 2]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [2, 3, 2, 3, 2]', () => {
        const actual = getPokerHand([2, 3, 2, 3, 2]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [3, 3, 2, 5, 3]', () => {
        const actual = getPokerHand([3, 3, 2, 5, 3]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [1, 6, 6, 1, 3]', () => {
        const actual = getPokerHand([1, 6, 6, 1, 3]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [1, 6, 3, 4, 6]', () => {
        const actual = getPokerHand([1, 6, 3, 4, 6]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [1, 6, 3, 4, 5]', () => {
        const actual = getPokerHand([1, 6, 3, 4, 5]);

        assert.equal(actual, 'Наивысшее очко');
    });

    it('should return `Wrong number of dices` for [1, 2, 3, 4, 5, 6]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5, 6]);

        assert.equal(actual, 'Wrong number of dices');
    });

    it('should return `Change your dices, cheater` for [1, 2, 3, 4, 7]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 7]);

        assert.equal(actual, 'Change your dices, cheater');
    });

});
