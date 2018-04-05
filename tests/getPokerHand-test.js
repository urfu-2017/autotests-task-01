const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` when there is only 4 equal numbers', () => {
        const actual = getPokerHand([1, 1, 1, 1, 2]);

        assert.equal(actual, 'Каре');
    })
});
