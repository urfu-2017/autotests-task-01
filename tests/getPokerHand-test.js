const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

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
    
    // Негативные тесты
    
    it('should throw `Ошибка: в функцию ничего не передали`', () => {
        const actual = getPokerHand();

        assert.equal(actual, 'Ошибка: в функцию ничего не передали');
    });
    
    it('should throw `Ошибка: в функцию передали не массив` for true', () => {
        const actual = getPokerHand(true);

        assert.equal(actual, 'Ошибка: в функцию передали не массив');
    });
    
    it('should throw `Ошибка: массив должен быть из пяти элементов` for [1, 2, 3, 4, 5, 6]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5, 6]);

        assert.equal(actual, 'Ошибка: массив должен быть из пяти элементов');
    });
    
    it('should throw `Ошибка: элемент массива - не число` for [1, "буквы", 3, 4, 5]', () => {
        const actual = getPokerHand([1, "буквы", 3, 4, 5]);

        assert.equal(actual, 'Ошибка: элемент массива - не число');
    });
    
    it('should throw `Ошибка: элемент массива меньше единицы` for [0, 2, 3, 4, 5]', () => {
        const actual = getPokerHand([0, 2, 3, 4, 5]);

        assert.equal(actual, 'Ошибка: элемент массива меньше единицы');
    });
});
