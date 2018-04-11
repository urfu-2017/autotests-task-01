const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [3, 1, 3, 3, 3]', () => {
        const actual = getPokerHand([3, 1, 3, 3, 3]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [5, 2, 5, 5, 2]', () => {
        const actual = getPokerHand([5, 2, 5, 5, 2]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [4, 6, 1, 6, 6]', () => {
        const actual = getPokerHand([4, 6, 1, 6, 6]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [2, 4, 4, 1, 2]', () => {
        const actual = getPokerHand([2, 4, 4, 1, 2]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [6, 4, 4, 1, 2]', () => {
        const actual = getPokerHand([6, 4, 4, 1, 2]);

        assert.equal(actual, 'Пара');
    });

    it('should throw error on values more 6', () => {
        assert.throws(() => getPokerHand([6, 7, 4, 1, 2]),
            'Dice should contains only numbers from 1 to 6');
    });

    it('should throw error on values less 1', () => {
        assert.throws(() => getPokerHand([6, 3, 4, 1, -5]),
            'Dice should contains only numbers from 1 to 6');
    });

    it('should throw error on not integer values', () => {
        assert.throws(() => getPokerHand([6, 3, 'hey', 1, 3]),
            'Dice should contains only numbers from 1 to 6');
    });

    it('should throw error when count of dice throw more 5', () => {
        assert.throws(() => getPokerHand([6, 3, 1, 1, 3, 4]),
            'Count of dice throw should equals 5');
    });

    it('should throw error when count of dice throw less 5', () => {
        assert.throws(() => getPokerHand([6, 3, 1, 1]),
            'Count of dice throw should equals 5');
    });

    it('should throw error when input is not an array', () => {
        assert.throws(() => getPokerHand('hey'),
            'Input should be an array');
    });
});
