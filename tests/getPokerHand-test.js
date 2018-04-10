const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    describe('Позитивные', ()=>{

        it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
            const actual = getPokerHand([1, 1, 1, 1, 1]);
    
            assert.equal(actual, 'Покер');
        });
    
        it('should return `Каре` for [1, 1, 1, 1, 5]', () => {
            const actual = getPokerHand([1, 1, 1, 1, 5]);
    
            assert.equal(actual, 'Каре');
        });
    
        it('should return `Фулл хаус` for [1, 5, 1, 1, 5]', () => {
            const actual = getPokerHand([1, 5, 1, 1, 5]);
    
            assert.equal(actual, 'Фулл хаус');
        });
    
        it('should return `Тройка` for [4, 2, 4, 3, 4]', () => {
            const actual = getPokerHand([4, 2, 4, 3, 4]);
    
            assert.equal(actual, 'Тройка');
        });
    
        it('should return `Две пары` for [3, 3, 1, 1, 5]', () => {
            const actual = getPokerHand([3, 3, 1, 1, 5]);
    
            assert.equal(actual, 'Две пары');
        });
    
        it('should return `Пара` for [1, 4, 1, 3, 2]', () => {
            const actual = getPokerHand([1, 4, 1, 3, 2]);
    
            assert.equal(actual, 'Пара');
        });
    
        it('should return `Наивысшее очко` for [1, 4, 5, 3, 2]', () => {
            const actual = getPokerHand([1, 4, 5, 3, 2]);
    
            assert.equal(actual, 'Наивысшее очко');
        });
    });

    describe('Негативные', ()=> {
        it('should throw `NAN` error for 15', () => {
            const cb = () => getPokerHand(15);

            assert.throws(cb,/NAN/);
        });

        it('should throw `NAN in array` error for [1, \'\', 5, 3, 2]', () => {
            const cb = () => getPokerHand([1, '', 5, 3, 2]);

            assert.throws(cb,/NAN in array/);
        });

        it('should throw `NAN in array` error for [null, 4, 5, 3, 2]', () => {
            const cb = () => getPokerHand([null, 4, 5, 3, 2]);

            assert.throws(cb,/NAN in array/);
        });

        it('should throw `NAN in array` error for [undefined, 4, 5, 3, 2]', () => {
            const cb = () => getPokerHand([undefined, 4, 5, 3, 2]);

            assert.throws(cb,/NAN in array/);
        });

        it('should throw `not right length` error for [4, 5, 3, 2]', () => {
            const cb = () => getPokerHand([4, 5, 3, 2]);

            assert.throws(cb,/not right length/);
        });

        it('should throw `not an int in array` error for [1.75, 4, 5, 3, 2]', () => {
            const cb = () => getPokerHand([1.75, 4, 5, 3, 2]);

            assert.throws(cb,/not an int in array/);
        });

        it('should throw `out of range` error for [1, 4, 8, 3, 2]', () => {
            const cb = () => getPokerHand([1, 4, 8, 3, 2]);
            
            assert.throws(cb,/out of range/);
        });


    });
    


    // Напишите тесты на ваш замечательный код здесь
});
