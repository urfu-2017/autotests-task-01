const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [2, 2, 2, 2, 1]', () => {
        const actual = getPokerHand([2, 2, 2, 2, 1]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [2, 2, 2, 3, 3]', () => {
        const actual = getPokerHand([2, 2, 2, 3, 3]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [2, 2, 2, 4, 1]', () => {
        const actual = getPokerHand([2, 2, 2, 4, 1]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [5, 5, 3, 3, 1]', () => {
        const actual = getPokerHand([5, 5, 3, 3, 1]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [5, 5, 2, 3, 1]', () => {
        const actual = getPokerHand([5, 5, 2, 3, 1]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [5, 6, 3, 2, 1]', () => {
        const actual = getPokerHand([5, 6, 3, 2, 1]);

        assert.equal(actual, 'Наивысшее очко');
    });

    it('should throw error `Error` with message `Bad input: array should have 5 elements` for array with length more than 5', () => {
        assert.throws(() => getPokerHand([5, 6, 3, 2, 1, 1, 4]), Error, "Bad input: array should have 5 elements");
        assert.throws(() => getPokerHand([5, 6, 3, 2, 1, 1, 4, 2, 3, 6, 7]), Error, "Bad input: array should have 5 elements");
    });

    it('should throw error `Error` with message `Bad input: array should have 5 elements` for array with length less than 5', () => {
        assert.throws(() => getPokerHand([5]), Error, "Bad input: array should have 5 elements");
        assert.throws(() => getPokerHand([5, 6, 3]), Error, "Bad input: array should have 5 elements");
    });

    it('should throw error `Error` with message `Array should have values in [1, 2, 3, 4, 5, 6]` for array', () => {
        assert.throws(() => getPokerHand([-2, 3, 0, 6, 1]), Error, "Array should have values in [1, 2, 3, 4, 5, 6]");
        assert.throws(() => getPokerHand([7, 8, 9, 10, 11]), Error, "Array should have values in [1, 2, 3, 4, 5, 6]");
    });

    it('should throw error `Error` with message `Input should be an array` for not array input', () => {
        assert.throws(() => getPokerHand(2), Error, "Input should be an array");
        assert.throws(() => getPokerHand(), Error, "Input should be an array");
        assert.throws(() => getPokerHand('hello'), Error, "Input should be an array");
    });

    it('should throw error `Error` with message `Array should contains only integers` for not integers in array', () => {
        assert.throws(() => getPokerHand([1.1, 2, 3, 4, 5]), Error, "Array should contains only integers");
        assert.throws(() => getPokerHand([1, 2, '10', 7, 8]), Error, "Array should contains only integers");
    });
});
