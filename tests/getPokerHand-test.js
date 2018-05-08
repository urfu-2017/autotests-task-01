const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [4, 4, 4, 4, 4]', () => {
        const actual = getPokerHand([4, 4, 4, 4, 4]); assert.equal(actual, 'Покер');
    });
	 it('should return `Каре` for [1, 5, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 5, 1, 1, 1]); assert.equal(actual, 'Каре');
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
	 it('should return `Пара` for [1, 4, 3, 6, 1]', () => {
        const actual = getPokerHand([1, 4, 3, 6, 1]); assert.equal(actual, 'Пара');
    });
	 it('should return `Наивысшее очко` for [6, 4, 2, 1, 5]', () => {
        const actual = getPokerHand([6, 4, 2, 1, 5]); assert.equal(actual, 'Наивысшее очко');
    });
	it('should throw error when length is not 5', () => {
     const actual = () => getPokerHand([1, 1, 1, 1]); assert.throws(actual, /There are less than five elements/);
	 });
	 it('should throw error when length is not 5', () => {
     const actual = () => getPokerHand([1, 2, 3, 4, 5, 6]); assert.throws(actual, /There are more than five elements/);
	 });
	 it('should throw error when the combination contains not a number', () => {
     const actual = () => getPokerHand([1, 1, 'h', 1,5]); assert.throws(actual, /Оne or more elements are not a number/);
	 });
	 it('should throw error when value not for the cube', () => {
     const actual = () => getPokerHand([1, 8, 1, 3, 1,]); assert.throws(actual, /There is a value not for the cube/);
	 });
	it('should throw error when value not integer', () => {
     const actual = () => getPokerHand([1, 8, 1.5, 3, 1,]); assert.throws(actual, /There is a value not for the cube/);
	 });
	 it('should throw error combination is not array', () => {
     const actual = () => getPokerHand("1, 8, 1, 3, 1,"); assert.throws(actual, /Combination is not an array/);
	 });
});
