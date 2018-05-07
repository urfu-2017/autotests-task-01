const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');
describe('getPokerHand', ()=>{
    describe('Positive', () => {
        it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
            const actual = getPokerHand([1, 1, 1, 1, 1]);

            assert.equal(actual, 'Покер');
        });
        it('should return `Каре` for [1, 6, 6, 6, 6]', () => {
            const actual = getPokerHand([1, 6, 6, 6, 6]);

            assert.equal(actual, 'Каре');
        });
        it('should return `Фулл хаус` for [4, 6, 4, 4, 6]', () => {
            const actual = getPokerHand([4, 6, 4, 4, 6]);

            assert.equal(actual, 'Фулл хаус');
        });
        it('should return `Тройка` for [4, 1, 4, 4, 6]', () => {
            const actual = getPokerHand([4, 1, 4, 4, 6]);

            assert.equal(actual, 'Тройка');
        });
        it('should return `Две пары` for [1, 6, 6, 4, 4]', () => {
            const actual = getPokerHand([1, 6, 6, 4, 4]);

            assert.equal(actual, 'Две Пары');
        });
        it('should return `Пара` for [1, 6, 3, 4, 6]', () => {
            const actual = getPokerHand([1, 6, 3, 4, 6]);

            assert.equal(actual, 'Пара');
        });
        it('should return `6` for [1, 2, 3, 4, 6]', () => {
            const actual = getPokerHand([1, 2, 3, 4, 6]);

            assert.equal(actual, '6');
        });
        // Напишите тесты на ваш замечательный код здесь
    });

    describe('negative', () => {
        it('Нужно ввести массив', () => {
            try {
                getPokerHand('Test');
                throw new Error('`getPokerHand` should throw error')
            } catch (error) {
                assert.equal(error.message, 'You should enter Array');
            }
        });
        it('Бросить нужно 5 костей, а не 3', () => {
            try {
                getPokerHand([1,2,3]);
                throw new Error('`getPokerHand` should throw error')
            } catch (error) {
                assert.equal(error.message, 'Need throw 6 dices');
            }
        });
        it('Бросить нужно не более 5', () => {
            try {
                getPokerHand([1,2,3,4,4,4,4]);
                throw new Error('`getPokerHand` should throw error')
            } catch (error) {
                assert.equal(error.message, 'Need throw 6 dices');
            }
        });

        
            it('Значения должны быть в промежутке от 1 до 6', () => {
            try {
                getPokerHand([1, 2, 3, 4, 7]);
                throw new Error('`getPokerHand` should throw error')
            } catch (error) {
                assert.equal(error.message, 'Значения должны быть в промежутке от 1 до 6');
            }
        });
        it('Значения должны быть целые', () => {
            try {
                getPokerHand([1.7, 2, 3, 5.4, 5.1]);
                throw new Error('`getPokerHand` should throw error')
            } catch (error) {
                assert.equal(error.message, 'Значения должны быть целые');
            }
        });
    });
});
