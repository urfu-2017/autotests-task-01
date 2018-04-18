const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand valid', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);
        assert.equal(actual, 'Покер');
    })

    it('should return `Каре` for [2, 6, 2, 2, 2]', () => {
        const actual = getPokerHand([2, 6, 2, 2, 2]);
        assert.equal(actual, 'Каре');
    })

    it('should return `Тройка` for [5, 2, 2, 4, 2]', () => {
        const actual = getPokerHand([5, 2, 2, 4, 2]);
        assert.equal(actual, 'Тройка');
    })

    it('should return `Фулл хаус` for [4, 2, 2, 4, 4]', () => {
        const actual = getPokerHand([4, 2, 2, 4, 4]);
        assert.equal(actual, 'Фулл хаус');
    })

    it('should return `Пара` for [5, 3, 2, 4, 3]', () => {
        const actual = getPokerHand([5, 3, 2, 4, 3]);
        assert.equal(actual, 'Пара');
    })

    it('should return `Две пары` for [5, 3, 3, 4, 5]', () => {
        const actual = getPokerHand([5, 3, 3, 4, 5]);
        assert.equal(actual, 'Две пары');
    })

    it('should return `Наивысшее очко` for [5, 2, 3, 4, 1]', () => {
        const actual = getPokerHand([5, 2, 3, 4, 1]);
        assert.equal(actual, 'Наивысшее очко');
    })
});

describe('getPokerHand invalid', () => {
    it('should throw an error if the argument is absent', () => {
    const cb = () => getPokerHand();
    assert.throws(cb, /getPokerHand must take an argument/);
})

    it('should throw an error if the argument is not an array', () => {
    const cb = () => getPokerHand('meoow');
    assert.throws(cb, /The argument is not an array/);
})

    it('should throw an error for array size other than 5', () => {
        const cb = () => getPokerHand([5, 3, 4, 1, 2, 3]);
        assert.throws(cb, /The array length must be 5/);
    })

    it('should throw an error for value > 6', () => {
        const cb = () => getPokerHand([7, 3, 4, 1, 2]);
        assert.throws(cb, /The value is not in range 1-6/);
    })

    it('should throw an error for value < 1', () => {
    const cb = () => getPokerHand([2, 0, 4, 1, 2]);
    assert.throws(cb, /The value is not in range 1-6/);
})

    it('should throw an error if value is not an integer', () => {
        const cb = () => getPokerHand([1.7, 3, 4, 1, 2]);
        assert.throws(cb, /The value is not an integer/);
    })
});

