const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    describe('positive', () => {
        // проверка на тип комбинации
        it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
            const actual = getPokerHand([1, 1, 1, 1, 1]);

            assert.equal(actual, 'Покер');
        });
        it('should return `Каре` for [5, 5, 5, 2, 5]', () => {
            const actual = getPokerHand([5, 5, 5, 2, 5]);

            assert.equal(actual, 'Каре');
        });
        it('should return `Фулл хаус` for [2, 2, 4, 2, 4]', () => {
            const actual = getPokerHand([2, 2, 4, 2, 4]);

            assert.equal(actual, 'Фулл хаус');
        });
        it('should return `Тройка` for [5, 5, 1, 5, 4]', () => {
            const actual = getPokerHand([5, 5, 1, 5, 4]);

            assert.equal(actual, 'Тройка');
        });
        it('should return `Две пары` for [3, 2, 3, 2, 5]', () => {
            const actual = getPokerHand([3, 2, 3, 2, 5]);

            assert.equal(actual, 'Две пары');
        });
        it('should return `Пара` for [3, 5, 5, 2, 4]', () => {
            const actual = getPokerHand([3, 5, 5, 2, 4]);

            assert.equal(actual, 'Пара');
        });
        it('should return `Наивысшее очко` for [6, 5, 4, 3, 2]', () => {
            const actual = getPokerHand([6, 5, 4, 3, 2]);

            assert.equal(actual, 'Наивысшее очко');
        });
        // проверка граничных значений
        it('should return `Каре` for [6, 6, 6, 4, 6]', () => {
            const actual = getPokerHand([6, 6, 6, 4, 6]);

            assert.equal(actual, 'Каре');
        });
        it('should return `Две пары` for [1, 2, 3, 2, 1]', () => {
            const actual = getPokerHand([1, 2, 3, 2, 1]);

            assert.equal(actual, 'Две пары');
        });
        it('should return `Пара` for [1, 3, 6, 6, 5]', () => {
            const actual = getPokerHand([1, 3, 6, 6, 5]);

            assert.equal(actual, 'Пара');
        });
    });
    describe('negative', () => {
        // тип аргмента функции
        it('should throw error when argument is not an array', () => {
            const actual = () => getPokerHand();

            assert.throws(actual, /dice is not an array/i);
        });
        it('should throw error when argument is not an array', () => {
            const actual = () => getPokerHand('Neo, there is no spoo... brrr... array');

            assert.throws(actual, /dice is not an array/i);
        });
        // пустота массива
        it('should throw error when argument is array and array length not equals to 5', () => {
            const actual = () => getPokerHand([]);

            assert.throws(actual, /dice length should be equals to/i);
        });
        // приграничные значения для длины массива
        it('should throw error when argument is array and array length not equals to 5', () => {
            const actual = () => getPokerHand([1, 2, 3, 4]);

            assert.throws(actual, /dice length should be equals to/i);
        });
        it('should throw error when argument is array and array length not equals to 5', () => {
            const actual = () => getPokerHand([1, 2, 3, 4, 5, 6]);

            assert.throws(actual, /dice length should be equals to/i);
        });
        // не приграничные значения длин массивов
        it('should throw error when argument is array and array length not equals to 5', () => {
            const actual = () => getPokerHand([1, 2]);

            assert.throws(actual, /dice length should be equals to/i);
        })
        it('should throw error when argument is array and array length not equals to 5', () => {
            const actual = () => getPokerHand([1, 2, 3, 4, 5, 6, 7, 8]);

            assert.throws(actual, /dice length should be equals to/i);
        });
        // тип значений в массиве
        it('should throw error when argument-array contains not a number', () => {
            const actual = () => getPokerHand([1, 2, '3', 4, 5]);

            assert.throws(actual, /dice should contain only integer numbers/i);
        });
        it('should throw error when argument-array contains not an integer number', () => {
            const actual = () => getPokerHand([6, 4, 2, 3.141592, 5]);

            assert.throws(actual, /dice should contain only integer numbers/i);
        });
        // приграничные значения для элементов массива вне диапазона
        it('should throw error when argument-array contains values out of range 1-6', () => {
            const actual = () => getPokerHand([1, 0, 2, 3, 2]);

            assert.throws(actual, /dice should contain only positive integer numbers between 1 and 6/i);
        });
        it('should throw error when argument-array contains values out of range 1-6', () => {
            const actual = () => getPokerHand([1, 2, 3, 7, 6]);

            assert.throws(actual, /dice should contain only positive integer numbers between 1 and 6/i);
        });
        // значения в массиве вне диапазона, не приграничные
        it('should throw error when argument-array contains values out of range 1-6', () => {
            const actual = () => getPokerHand([1, 2, 3, 7, 6]);

            assert.throws(actual, /dice should contain only positive integer numbers between 1 and 6/i);
        });
        it('should throw error when argument-array contains values out of range 1-6', () => {
            const actual = () => getPokerHand([1, -2, 3, -4, 5]);

            assert.throws(actual, /dice should contain only positive integer numbers between 1 and 6/i);
        });
    });
});
