const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should throw `На вход должен подаваться массив` for (1, 1, 1, 1. 1)', () => {
        const actual = () => getPokerHand((1, 1, 1, 1, 1));

        assert.throws(actual, /На вход должен подаваться массив/);
    });

    it('should throw `На вход должен подаваться массив` for "1, 1, 1, 1. 1"', () => {
        const actual = () => getPokerHand("1, 1, 1, 1, 1");

    assert.throws(actual, /На вход должен подаваться массив/);
    });

    it('should throw `На вход должны подаваться целые числа` for [1, 1, 1, 1, 1.5]', () => {
        const actual = () => getPokerHand([1, 1, 1, 1, 1.5]);

    assert.throws(actual, /На вход должны подаваться целые числа/);
    });

    it('should throw `На вход должны подаваться целые числа` for [1, 1, 1, 1, NaN]', () => {
        const actual = () => getPokerHand([1, 1, 1, 1, NaN]);

    assert.throws(actual, /На вход должны подаваться целые числа/);
    });

    it('should throw `На вход должны подаваться целые числа` for [1, 1, 1, 1, "b"]', () => {
        const actual = () => getPokerHand([1, 1, 1, 1, "b"]);

    assert.throws(actual, /На вход должны подаваться целые числа/);
    });

    it('should throw `Числа могут быть только из диапазона от 1 до 6` for [1, 1, 1, 1, 0]', () => {
        const actual = () => getPokerHand([1, 1, 1, 1, 0]);

    assert.throws(actual, /Числа могут быть только из диапазона от 1 до 6/);
    });

    it('should throw `Числа могут быть только из диапазона от 1 до 6` for [1, 1, 1, 1, 7]', () => {
        const actual = () => getPokerHand([1, 1, 1, 1, 7]);

    assert.throws(actual, /Числа могут быть только из диапазона от 1 до 6/);
    });

    it('should throw `Числа могут быть только из диапазона от 1 до 6` for [1, 1, 1, 1, -10]', () => {
        const actual = () => getPokerHand([1, 1, 1, 1, -10]);

    assert.throws(actual, /Числа могут быть только из диапазона от 1 до 6/);
    });

    it('should throw `На вход должны подаваться 5 элементов` for [1, 1, 1, 1, 1, 1]', () => {
        const actual = () => getPokerHand([1, 1, 1, 1, 1, 1]);

        assert.throws(actual, /На вход должны подаваться 5 элементов/);
    });

    it('should throw `На вход должны подаваться 5 элементов` for [1, 1, 1, 1, 1, 1]', () => {
        const actual = () => getPokerHand([1, 1, 1, 1, 1, 1]);

    assert.throws(actual, /На вход должны подаваться 5 элементов/);
    });

    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [1, 2, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 2, 1, 1, 1]);

    assert.equal(actual, 'Каре');
    });

    it('should return `Фулл Хаус` for [1, 3, 1, 3, 1]', () => {
        const actual = getPokerHand([1, 3, 1, 3, 1]);

    assert.equal(actual, 'Фулл Хаус');
    });

    it('should return `Тройка` for [1, 4, 6, 1, 1]', () => {
        const actual = getPokerHand([1, 4, 6, 1, 1]);

    assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [1, 6, 6, 3, 1]', () => {
        const actual = getPokerHand([1, 6, 6, 3, 1]);

    assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [1, 3, 3, 5, 2]', () => {
        const actual = getPokerHand([1, 3, 3, 5, 2]);

    assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [1, 3, 5, 2, 4]', () => {
        const actual = getPokerHand([1, 3, 5, 2, 4]);

    assert.equal(actual, 'Наивысшее очко');
    });

});
