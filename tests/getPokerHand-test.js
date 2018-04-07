const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [2, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([2, 1, 1, 1, 1]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл Хаус` for [2, 2, 1, 1, 1]', () => {
        const actual = getPokerHand([2, 2, 1, 1, 1]);

        assert.equal(actual, 'Фулл Хаус');
    });

    it('should return `Тройка` for [2, 3, 1, 1, 1]', () => {
        const actual = getPokerHand([2, 3, 1, 1, 1]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две Пары` for [2, 2, 3, 1, 1]', () => {
        const actual = getPokerHand([2, 2, 3, 1, 1]);

        assert.equal(actual, 'Две Пары');
    });

    it('should return `Пара` for [2, 3, 4, 1, 1]', () => {
        const actual = getPokerHand([2, 3, 4, 1, 1]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Старшее Очко` for [1, 2, 3, 4, 5]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5]);

        assert.equal(actual, 'Старшее Очко');
    });

    it('should throw error when there is less then 5 dice', () => {
        try {
            getPokerHand([1,2,3,4]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, "Неправильное число костей");
        }
    });

    it('should throw error when there is more then 5 dice', () => {
        try {
            getPokerHand([1,2,3,4,5,6]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Неправильное число костей');
        }
    });

    it('should throw error when there is wrong dices', () => {
        try {
            getPokerHand([1,2,3,4,124354245]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Неправильное значение на кости');
        }
    });

    it('should throw error when there is wrong dices', () => {
        try {
            getPokerHand([1,2,3,4,'Арбуз']);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Неправильное значение на кости');
        }
    });
});
