'use strict';
const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    // Напишите тесты на ваш замечательный код здесь
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
    // Напишите тесты на ваш замечательный код здесь
describe('Errors', () => {

    it(`should throw error when more than one argument`, () => {
       const actual = () => getPokerHand([1, 1, 1, 1, 1],[1]);
       assert.throws(actual, /More than one argument/);
    })
    it(`should throw error when array length more than five elements`, () => {
        const actual = () => getPokerHand([1, 1, 1, 1, 1, 1, 1]);
        assert.throws(actual, /There must be five elements/);
    })
    it(`should throw error when array length less than five elements`, () => {
        const actual = () => getPokerHand([1, 1, 1, 1]);
        assert.throws(actual, /There must be five elements/);
    })
    it(`should throw error when element isn't integers`, () => {
        const actual = () => getPokerHand([1, 1, 1, 'l', 1]);
        assert.throws(actual, /All elements must be integers/);
    })
    it(`should throw error when element less than 1`, () => {
        const actual = () => getPokerHand([1, 1, 1, -2, 1]);
        assert.throws(actual, /All elements must be more than 0/);
    })
    it(`should throw error when element more than 6`, () => {
        const actual = () => getPokerHand([1, 1, 1, 8, 1]);
        assert.throws(actual, /All elements must be less than 7/);
    })
});

