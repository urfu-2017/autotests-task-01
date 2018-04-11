const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    // Напишите тесты на ваш замечательный код здесь
    it('should return `Каре` for [1, 1, 1, 1, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 2]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Каре` for [2, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([2, 1, 1, 1, 1]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [1, 1, 1, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 2]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Фулл хаус` for [1, 2, 1, 2, 1]', () => {
        const actual = getPokerHand([1, 2, 1, 2, 1]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [1, 1, 1, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 3]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Тройка` for [1, 3, 4, 1, 1]', () => {
        const actual = getPokerHand([1, 3, 4, 1, 1]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 2, 2, 3]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Две пары` for [3, 1, 2, 1, 3]', () => {
        const actual = getPokerHand([3, 1, 2, 1, 3]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [1, 1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 1, 2, 3, 4]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Пара` for [5, 5, 2, 3, 4]', () => {
        const actual = getPokerHand([5, 5, 2, 3, 4]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5]);

        assert.equal(actual, 'Наивысшее очко');
    });

    it('should return `Некорректный ввод` for lalala', () => {
        const actual = getPokerHand('lalala');

        assert.equal(actual, 'Некорректный ввод');
    });

    it('should return `Некорректный ввод` for [1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 2, 3, 4]);

        assert.equal(actual, 'Некорректный ввод');
    });

    it('should return `Некорректный ввод` for []', () => {
        const actual = getPokerHand([]);

        assert.equal(actual, 'Некорректный ввод');
    });

    it('should return `Некорректный ввод` for [1, 1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([]);

        assert.equal(actual, 'Некорректный ввод');
    });

    it('should return `Некорректный ввод` for [99, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([]);

        assert.equal(actual, 'Некорректный ввод');
    });

    it('should return `Некорректный ввод` for [0, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([]);

        assert.equal(actual, 'Некорректный ввод');
    });

    it('should return `Некорректный ввод` for [0, a, b, c, 1]', () => {
        const actual = getPokerHand([]);

        assert.equal(actual, 'Некорректный ввод');
    });
});
