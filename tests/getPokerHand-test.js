const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);
        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [1, 1, 1, 1, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 2]);
        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [1, 1, 1, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 2]);
        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [1, 1, 1, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 3]);
        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 2, 2, 3]);
        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [1, 1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 1, 2, 3, 4]);
        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5]);
        assert.equal(actual, 'Наивысшее очко');
    });

    it('should throw error when more than 5 dice', () => {
        const actual = () => getPokerHand([1, 1, 1, 1, 1, 1]);
        assert.throws(actual, /Bad input parameter to function/);
    });

    it('should throw error when less than 5 dice', () => {
        const actual = () => getPokerHand([1, 1, 1, 1]);
        assert.throws(actual, /Bad input parameter to function/);
    });

    it('should throw error when argument is not array', () => {
        const actual = () => getPokerHand("11111");
        assert.throws(actual, /Bad input parameter to function/);
    });

    it('should throw error when dice value more than 6', () => {
        const actual = () => getPokerHand([1, 1, 1, 1, 7]);
        assert.throws(actual, /Bad dice value/);
    });

    it('should throw error when dice value less than 1', () => {
        const actual = () => getPokerHand([1, 1, 1, 1, 0]);
        assert.throws(actual, /Bad dice value/);
    });

    it('should throw error when dice value is not number', () => {
        const actual = () => getPokerHand([1, 1, 1, 1, NaN]);
        assert.throws(actual, /Bad dice value/);
    });
});
