const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('tests', () => {
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
    });
    
    describe('errors', () => {
        
        it('should throw new Error if argument is not array)', () => {
            const actual = () => getPokerHand();
    
            assert.throws(actual, 'It is not a Array');
        });
    
        it('should throw new Error if array length more than 5', () => {
            const actual = () => getPokerHand([1, 1, 1, 1, 1, 1]);
    
            assert.throws(actual, 'There is no 5 cards');
        });
    
        it('should throw new Error if array length less than 5', () => {
            const actual = () => getPokerHand([1, 1, 1, 1]);
    
            assert.throws(actual, 'There is no 5 cards');
        });
    
        it('should throw new RangeError if element of array less than 1', () => {
            const actual = () => getPokerHand([1, 1, 1, 1, 0]);
    
            assert.throws(actual, 'No such card');
        });
    
        it('should throw new RangeError if element of array more than 6', () => {
            const actual = () => getPokerHand([1, 1, 1, 1, 7]);
    
            assert.throws(actual, 'No such card');
        });
    
        it('should throw new TypeError if element of array not a number', () => {
            const actual = () => getPokerHand([1, 1, 1, 1, 'd']);
    
            assert.throws(actual, 'Can\'t convert String to Number');
        });
    
        it('should throw new TypeError if element is float', () => {
            const actual = () => getPokerHand([1, 1, 1, 1, 1.2]);
    
            assert.throws(actual, 'No float numbers');
        });
    })
});
