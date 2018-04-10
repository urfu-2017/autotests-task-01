const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');
const POKER_HAND = require('../lib/const').POKER_HAND;

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Покер` for [3, 3, 3, 3, 3]', () => {
        const actual = getPokerHand([3, 3, 3, 3, 3]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [4, 3, 4, 4, 4]', () => {
        const actual = getPokerHand([4, 3, 4, 4, 4]);

        assert.equal(actual, POKER_HAND.FOUR_OF_A_KIND);
    });

    it('should return `Каре` for [1, 1, 1, 1, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 2]);

        assert.equal(actual, POKER_HAND.FOUR_OF_A_KIND);
    });

    it('should return `Фулл хаус` for [1, 1, 1, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 2]);

        assert.equal(actual, POKER_HAND.FULL_HOUSE);
    });

    it('should return `Фулл хаус` for [5, 5, 3, 5, 3]', () => {
        const actual = getPokerHand([5, 5, 3, 5, 3]);

        assert.equal(actual, POKER_HAND.FULL_HOUSE);
    });

    it('should return `Тройка` for [1, 1, 1, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 3]);

        assert.equal(actual, POKER_HAND.THREE_OF_A_KIND);
    });

    it('should return `Тройка` for [6, 6, 3, 5, 6]', () => {
        const actual = getPokerHand([6, 6, 3, 5, 6]);

        assert.equal(actual, POKER_HAND.THREE_OF_A_KIND);
    });

    it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 2, 2, 3]);

        assert.equal(actual, POKER_HAND.TWO_PAIR);
    });

    it('should return `Две пары` for [5, 3, 3, 5, 6]', () => {
        const actual = getPokerHand([5, 3, 3, 5, 6]);

        assert.equal(actual, POKER_HAND.TWO_PAIR);
    });

    it('should return `Пара` for [1, 1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 1, 2, 3, 4]);

        assert.equal(actual, POKER_HAND.PAIR);
    });

    it('should return `Пара` for [6, 3, 2, 4, 4]', () => {
        const actual = getPokerHand([6, 3, 2, 4, 4]);

        assert.equal(actual, POKER_HAND.PAIR);
    });

    it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5]);

        assert.equal(actual, POKER_HAND.HIGH_CARD);
    });

    it('should return `Наивысшее очко` for [3, 2, 5, 1, 6]', () => {
        const actual = getPokerHand([3, 2, 5, 1, 6]);

        assert.equal(actual, POKER_HAND.HIGH_CARD);
    });

    it('should throw `Dice argument must be an array` error for null', () => {
        assert.throws(
            () => getPokerHand(null),
            /Dice argument must be an array/
        );
    })

    it('should throw `Dice argument must be an array` error for undefined', () => {
        assert.throws(
            () => getPokerHand(undefined),
            /Dice argument must be an array/
        );
    })

    it('should throw `Dice argument must be an array` error for NaN', () => {
        assert.throws(
            () => getPokerHand(NaN),
            /Dice argument must be an array/
        );
    })

    it('should throw `Dice argument must be an array` error for a single integer', () => {
        assert.throws(
            () => getPokerHand(42),
            /Dice argument must be an array/
        );
    })

    it('should throw `Dice argument must be an array` error for a string', () => {
        assert.throws(
            () => getPokerHand('some text'),
            /Dice argument must be an array/
        );
    })

    it('should throw `Dice argument must be an array` error for a some object', () => {
        assert.throws(
            () => getPokerHand({ 1: '1', 2: null }),
            /Dice argument must be an array/
        );
    })

    it('should throw `Dice argument must be an array` error for missing argument', () => {
        assert.throws(
            () => getPokerHand(),
            /Dice argument must be an array/
        );
    })

    it('should throw `Dice array length must be 5` error for array of length 0', () => {
        assert.throws(
            () => getPokerHand([]),
            /Dice array length must be 5/
        );
    })

    it('should throw `Dice array length must be 5` error for array of length 4', () => {
        assert.throws(
            () => getPokerHand([1, 2, 3]),
            /Dice array length must be 5/
        );
    })

    it('should throw `Dice array length must be 5` error for array of length 6', () => {
        assert.throws(
            () => getPokerHand([1, 2, 3, 4, 5, 6]),
            /Dice array length must be 5/
        );
    })

    it('should throw `Dice must be an integer from 1 to 6` error for array whith strings', () => {
        assert.throws(
            () => getPokerHand([1, 2, '3', 4, 5]),
            /Dice must be an integer from 1 to 6/
        );
    })

    it('should throw `Dice must be an integer from 1 to 6` error for array whith null', () => {
        assert.throws(
            () => getPokerHand([1, 2, 3, null, 5]),
            /Dice must be an integer from 1 to 6/
        );
    })

    it('should throw `Dice must be an integer from 1 to 6` error for array whith NaN', () => {
        assert.throws(
            () => getPokerHand([1, 2, 3, 4, NaN]),
            /Dice must be an integer from 1 to 6/
        );
    })

    it('should throw `Dice must be an integer from 1 to 6` error for array whith undefined', () => {
        assert.throws(
            () => getPokerHand([1, undefined, 3, 4, 5]),
            /Dice must be an integer from 1 to 6/
        );
    })

    it('should throw `Dice must be an integer from 1 to 6` error for [1, 2, 3, 7, 3]', () => {
        assert.throws(
            () => getPokerHand([1, 2, 3, 7, 3]),
            /Dice must be an integer from 1 to 6/
        );
    })

    it('should throw `Dice must be an integer from 1 to 6` error for [1, 2, 0, 2, 3]', () => {
        assert.throws(
            () => getPokerHand([1, 2, 0, 2, 3]),
            /Dice must be an integer from 1 to 6/
        );
    })

    it('should throw `Dice must be an integer from 1 to 6` error for [1, 2, -1, 2, 3]', () => {
        assert.throws(
            () => getPokerHand([1, 2, -1, 2, 3]),
            /Dice must be an integer from 1 to 6/
        );
    })
});
