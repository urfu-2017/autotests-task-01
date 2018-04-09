const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);
        assert.equal(actual, 'Покер');
    });
    it('should return `Покер` for [6, 6, 6, 6, 6]', () => {
        const actual = getPokerHand([6, 6, 6, 6, 6]);
        assert.equal(actual, 'Покер');
    });
    it('should return `Каре` for [1, 1, 1, 1, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 2]);
        assert.equal(actual, 'Каре');
    })
    it('should return `Каре` for [1, 1, 1, 5, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 5, 1]);
        assert.equal(actual, 'Каре');
    });
    it('should return `Фулл хаус` for [1, 1, 1, 3, 3]', () => {
        const actual = getPokerHand([1, 1, 1, 3, 3]);
        assert.equal(actual, 'Фулл хаус');
    })
    it('should return `Фулл хаус` for [1, 1, 5, 1, 5]', () => {
        const actual = getPokerHand([1, 1, 5, 1, 5]);
        assert.equal(actual, 'Фулл хаус');
    });
    it('should return `Тройка` for [2, 4, 3, 4, 4]', () => {
        const actual = getPokerHand([2, 4, 3, 4, 4]);
        assert.equal(actual, 'Тройка');
    })
    it('should return `Две пары` for [6, 3, 2, 6, 2]', () => {
        const actual = getPokerHand([6, 3, 2, 6, 2]);
        assert.equal(actual, 'Две пары');
    });
    it('should return `Наивысшее очко` for [1, 2, 4, 3, 6]', () => {
        const actual = getPokerHand([1, 2, 4, 3, 6]);
        assert.equal(actual, 'Наивысшее очко');
    })

    it('should throw error when array contains more than 5 dice', () => {
        const actual = () => getPokerHand([1, 2, 4, 3, 6, 1]);

        assert.throws(actual, /Введите список из 5 костей./);
    })
    it('should throw error when array contains less than 5 dice', () => {
        const actual = () => getPokerHand([1, 2, 4, 3]);

        assert.throws(actual, /Введите список из 5 костей./);
    })
    it('should throw error when array contains less than 5 dice', () => {
        const actual = () => getPokerHand([]);

        assert.throws(actual, /Введите список из 5 костей./);
    })
    it('should throw error when array contains numbers more than 6', () => {
        const actual = () => getPokerHand([1, 2, 3, 4, 7]);

        assert.throws(actual, /Кость может принимать значения только от 1 до 6./);
    })
    it('should throw error when array contains numbers less than 1', () => {
        const actual = () => getPokerHand([1, 2, 0, 4, 5]);

        assert.throws(actual, /Кость может принимать значения только от 1 до 6./);
    })
    it('should throw error when array contains not a numbers', () => {
        const actual = () => getPokerHand([1, 2, 'NaN', 4, 5]);

        assert.throws(actual, /Кость может принимать значения только от 1 до 6./);
    })

});
