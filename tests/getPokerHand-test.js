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
    it('should return `Фулл хаус` for [1, 1, 3, 3, 1]', () => {
        const actual = getPokerHand([1, 1, 3, 3 , 1]);

        assert.equal(actual, 'Фулл хаус');
    });
    it('should return `Тройка` for [1, 1, 1, 4, 3]', () => {
        const actual = getPokerHand([1, 1, 1, 4, 3]);

        assert.equal(actual, 'Тройка');
    });
    it('should return `Две пары` for [1, 1, 5, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 5, 2, 2]);

        assert.equal(actual, 'Две пары');
    });
    it('should return `Пара` for [1, 1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 1, 2, 3, 4]);

        assert.equal(actual, 'Пара');
    });
    it('should return `Наивысшее очко` for [1, 2, 4, 5, 3]', () => {
        const actual = getPokerHand([1, 2, 4, 5, 3]);

        assert.equal(actual, 'Наивысшее очко');
    });
    it('should return `Длина больше требуемой` for [1, 6, 2, 4, 5, 3]', () => {
        const actual = getPokerHand([1, 6, 2, 4, 5, 3]);

        assert.equal(actual, 'Длина больше требуемой');
    });
    it('should return `Длина меньше требуемой` for [2, 4, 5, 3]', () => {
        const actual = getPokerHand([ 2, 4, 5, 3]);

        assert.equal(actual, 'Длина меньше требуемой');
    });
    it('should return `Введенных значений нет на игральной кости` for [7, 2, 4, 5, 3]', () => {
        const actual = getPokerHand([7, 2, 4, 5, 3]);

        assert.equal(actual, 'Введенных значений нет на игральной кости');
    });
    it('should return `Введенных значений нет на игральной кости` for [7, 2, 4, 5, 3]', () => {
        const actual = getPokerHand([a, g, 4, 5, 3]);

        assert.equal(actual, 'Введенных значений нет на игральной кости');
    });

    // Напишите тесты на ваш замечательный код здесь
});
