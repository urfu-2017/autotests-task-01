const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    describe('positive', () => {
        // Проверим все описанные комбинации, их 7.
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
    describe('negative', () => {
        // Проверим негативные сценарии:
        it('should return Error(`Введён не массив`) for 12345', () => {
            const actual = () => getPokerHand(12345);
            assert.throws(actual, /Введён не массив/);
        });

        it('should return Error(`Введён не массив`) for \`undefined\`', () => {
            const actual = () => getPokerHand(`undefined`);
            assert.throws(actual, /Введён не массив/);
        });

        it('should return Error(`Введён не массив`) for {}', () => {
            const actual = () => getPokerHand({});
            assert.throws(actual, /Введён не массив/);
        });

        it('should return Error(`Введён не массив`) for \`notAnArray\`', () => {
            const actual = () => getPokerHand(`notAnArray`);
            assert.throws(actual, /Введён не массив/);
        });

        it('should return Error(`Длина массива не равна 5`) for [1, 2, 3, 4]', () => {
            const actual = () => getPokerHand([1, 2, 3, 4]);
            assert.throws(actual, /Длина массива не равна 5/);
        });

        it('should return Error(`Длина массива не равна 5`) for [1, 2, 3, 4, 5, 6]', () => {
            const actual = () => getPokerHand([1, 2, 3, 4, 5, 6]);
            assert.throws(actual, /Длина массива не равна 5/);
        });
        
        it('should return Error(`Есть значения за пределами диапазона кости`) for [8, 2, 3, 4, 5]', () => {
            const actual = () => getPokerHand([8, 2, 3, 4, 5]);
            assert.throws(actual, /Есть значения за пределами диапазона кости/);
        });
        
        it('should return Error(`Есть значения за пределами диапазона кости`) for [0, 2, 3, 4, 5]', () => {
            const actual = () => getPokerHand([0, 2, 3, 4, 5]);
            assert.throws(actual, /Есть значения за пределами диапазона кости/);
        });
        
        it('should return Error(`Есть дробные значения`) for [1.5, 2, 3, 4, 5]', () => {
            const actual = () => getPokerHand([1.5, 2, 3, 4, 5]);
            assert.throws(actual, /Есть дробные значения/);
        });

        it('should return Error(`Есть нечисловые значения`) for [undefined, 2, 3, 4, 5]', () => {
            const actual = () => getPokerHand([undefined, 2, 3, 4, 5]);
            assert.throws(actual, /Есть нечисловые значения/);
        });
        
    });
});
