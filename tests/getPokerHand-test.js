const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [4, 4, 4, 4, 4]', () => {
        const actual = getPokerHand([4, 4, 4, 4, 4]); assert.equal(actual, 'Покер');
    });
	 it('should return `Каре` for [1, 2, 6, 4, 2]', () => {
        const actual = getPokerHand([1, 2, 6, 4, 2]); assert.equal(actual, 'Каре');
    });
	 it('should return `Фулл хаус` for [3, 5, 3, 5, 5]', () => {
        const actual = getPokerHand([3, 5, 3, 5, 5]); assert.equal(actual, 'Фулл хаус');
    });
	 it('should return `Тройка` for [4, 1, 4, 2, 4]', () => {
        const actual = getPokerHand([4, 1, 4, 2, 4]); assert.equal(actual, 'Тройка');
    });
	 it('should return `Две пары` for [1, 6, 1, 6, 4]', () => {
        const actual = getPokerHand([1, 6, 1, 6, 4]); assert.equal(actual, 'Две пары');
    });
	 it('should return `Пара ` for [1, 4, 3, 6, 1]', () => {
        const actual = getPokerHand([1, 4, 3, 6, 1]); assert.equal(actual, 'Пара');
    });
	 it('should return `Наивысшее очко` for [6, 4, 2, 1, 5]', () => {
        const actual = getPokerHand([6, 4, 2, 1, 5]); assert.equal(actual, 'Наивысшее очко');
    });
	it('should throw error when length is not 5', () => {
     const actual = () => getPokerHand([1, 1, 1, 1]); assert.throws(actual, /This is not a combination for poker/);
	 });
	 it('should throw error when length is not 5', () => {
     const actual = () => getPokerHand([1, 2, 3, 4, 5, 6]); assert.throws(actual, /This is not a combination for poker/);
	 });
	 it('should throw error when combination is not a Number', () => {
     const actual = () => getPokerHand([1, 1, 'h', 1,5]); assert.throws(actual, /There is not a Number/);
	 });
	 it('should throw error when value not for the cube', () => {
     const actual = () => getPokerHand([1, 8, 1, 3, 1,]); assert.throws(actual, /There is a value not for the cube/);
	 });
});
