const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {

    describe('Negative', () => {

        it('should throw error for non Array', () => {
            const actual = () => { getPokerHand(5) };
            assert.throws(actual, "Входной параметр должен быть массивом");
        });
        it('should throw error for empty value', () => {
            const actual = () => { getPokerHand([]) };
            assert.throws(actual, "Массив должен содержать ровно 5 элементов");
        });
        //приграничные для количества элементов в массиве
        it('should throw error for count elements = 6', () => {
            const actual = () => { getPokerHand([5, 1, 5, 2, 2, 5]) };
            assert.throws(actual, "Массив должен содержать ровно 5 элементов");
        });
        
        it('should throw error for count elements = 4', () => {
            const actual = () => { getPokerHand([5, 1, 5, 2,]) };
            assert.throws(actual, "Массив должен содержать ровно 5 элементов");
        });

        //не приграничное для количества элементов в массиве
        it('should throw error for count elements = 2', () => {
            const actual = () => { getPokerHand([5, 1]) };
            assert.throws(actual, "Массив должен содержать ровно 5 элементов");
        });
        it('should throw error for non allowed elements', () => {
            const actual = () => { getPokerHand([1, 2, 3, 1, null]) };
            assert.throws(actual,"Недопустимые элементы в массиве");
        });

        //приграничное значение вне диапазона справа 
        it ('should throw error for values out of range 1-6 (7)',() => {
            const actual = () => getPokerHand([1, 7, 2, 6, 5]);
            assert.throws(actual, "Недопустимые элементы в массиве");
        });

        //приграничное значение вне диапазона слева
        it('should throw error for values out of range 1-6 (0)', () => {
            const actual = () => { getPokerHand([0, 1, 2, 3, 4]) };
            assert.throws(actual,"Недопустимые элементы в массиве");
        });

        //не приграниченое значение вне диапазона 1-6
        it('should throw error for values out of range 1-6 (22)', () => {
            const actual = () => { getPokerHand([0, 1, 2, 22, 4]) };
            assert.throws(actual,"Недопустимые элементы в массиве");
        });
        //строка в массиве
        it ('should throw error for value not a number ',() => {
            const actual  = () => getPokerHand([1, '2', 3, 4, 6])
            assert.throws(actual, "Недопустимые элементы в массиве");
        });
        //float в массиве
        it ('should throw error for float in array',() => {
            const actual  = () => getPokerHand([1, 1.1 , 3, 4, 6])
            assert.throws(actual, "Недопустимые элементы в массиве");
        });
    });

    describe('Positive', () => {
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

        it('should return `Пара` for [1, 4, 1, 3, 2]', () => {
            const actual = getPokerHand([1, 4, 1, 3, 2]);
            assert.equal(actual, 'Пара');
        });


        it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
            const actual = getPokerHand([1, 2, 3, 4, 5]);
            assert.equal(actual, 'Наивысшее очко');
        });
    });  

});

