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

describe('getPokerHand negative', () => {
    it('should throw error when dice is not array', () => {
        assert.throws(() => getPokerHand('array'), /Dice is not an Array/);
    });

    it('should throw error when dice length is not equal to 5 (>5)', () => {
        assert.throws(() => getPokerHand([2, 5, 2, 3, 2, 2]), /Length is not equal to 5/);
    });

    it('should throw error when dice length is not equal to 5 (<5)', () => {
        assert.throws(() => getPokerHand([3, 5, 2, 1]), /Length is not equal to 5/);
    });

    it('should throw error when dice contain float number', () => {
        assert.throws(() => getPokerHand([2, 5, 1.5, 3, 5]), /Array does contain not integer/);
    });

    it('should throw error when dice contain not integer', () => {
        assert.throws(() => getPokerHand([2, 'five', 1, 3, 5]), /Array does contain not integer/);
    });

    it('should throw error when dice contain number is not in the valid range (< 1)', () => {
        assert.throws(() => getPokerHand([5, 5, 5, 0, 5]), /Number is not in the valid range/);
    });

    it('should throw error when dice contain number is not in the valid range (< 6)', () => {
        assert.throws(() => getPokerHand([7, 4, 3, 4, 3]), /Number is not in the valid range/);
    });
});
