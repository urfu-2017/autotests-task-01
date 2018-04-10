const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    describe('positive', () => {
        it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
            const actual = getPokerHand([1, 1, 1, 1, 1]);
    
            assert.equal(actual, 'Покер');
        });
        it('should return `Каре` for [6, 2, 2, 2, 2]', () => {
            const actual = getPokerHand([6, 2, 2, 2, 2]);
    
            assert.equal(actual, 'Каре');
        });
        it('should return `Фулл хаус` for [5, 5, 5, 3, 3]', () => {
            const actual = getPokerHand([5, 5, 5, 3, 3]);
    
            assert.equal(actual, 'Фулл хаус');
        });
        it('should return `Тройка` for [1, 4, 6, 6, 6]', () => {
            const actual = getPokerHand([1, 4, 6, 6, 6]);
    
            assert.equal(actual, 'Тройка');
        });
        it('should return `Две пары` for [1, 1, 3, 3, 5]', () => {
            const actual = getPokerHand([1, 1, 3, 3, 5]);
    
            assert.equal(actual, 'Две пары');
        });
        it('should return `Пара` for [3, 3, 1, 6, 4]', () => {
            const actual = getPokerHand([3, 3, 1, 6, 4]);
    
            assert.equal(actual, 'Пара');
        });
        it('should return `Наивысшее очко` for [1, 3, 4, 5, 6]', () => {
            const actual = getPokerHand([1, 3, 4, 5, 6]);
    
            assert.equal(actual, 'Наивысшее очко');
        });
    });
    describe('negative', () => {
        describe('notArray', () => {
            it('should throw `You must pass an array` error for string', () => {                 
                assert.throws(() => getPokerHand('[1, 3, 4, 5, 6]'), /You must pass an array/);
                    });
            it('should throw `You must pass an array` error for undefined', () => {                 
                assert.throws(() => getPokerHand(undefined), /You must pass an array/);
            });
            it('should throw `You must pass an array` error for empty arguments', () => {                 
                assert.throws(() => getPokerHand(), /You must pass an array/);
            });
            it('should throw `You must pass an array` error for null', () => {                 
                assert.throws(() => getPokerHand(null), /You must pass an array/);
            });
            it('should throw `You must pass an array` error for NaN', () => {                 
                assert.throws(() => getPokerHand(NaN), /You must pass an array/);
            }); 
            it('should throw `You must pass an array` error for object', () => {                 
                assert.throws(() => getPokerHand({'123':'123'}), /You must pass an array/);
            }); 
        });
        describe('lengthOfTheArray', () => {
            it('should throw `You must pass 5 cubes` error for more 5 cubes', () => {                 
                assert.throws(() => getPokerHand([1, 3, 4, 5, 6, 5]), /You must pass 5 cubes/);
            });
            it('should throw `You must pass 5 cubes` error for less 5 cubes', () => {                 
                assert.throws(() => getPokerHand([1, 3]), /You must pass 5 cubes/);
            });
            it('should throw `You must pass 5 cubes` error for 0 cubes', () => {                 
                assert.throws(() => getPokerHand([]), /You must pass 5 cubes/);
            });

        });
        describe('Values must be integers', () => {
            it('should throw `Values must be integers` error for one string element', () => {                 
                assert.throws(() => getPokerHand([3, 2, 3, '12', 5]), /Values must be integers/);
            });
            it('should throw `Values must be integers` error for Nan element', () => {                 
                assert.throws(() => getPokerHand([3, 2, 3, NaN, 5]), /Values must be integers/);
            });
            it('should throw `Values must be integers` error for undefined element', () => {                 
                assert.throws(() => getPokerHand([3, 2, 3, undefined, 5]), /Values must be integers/);
            });
            it('should throw `Values must be integers` error for null element', () => {                 
                assert.throws(() => getPokerHand([3, 2, 3, null, 5]), /Values must be integers/);
            });
            it('should throw `Values must be integers` error for double element', () => {                 
                assert.throws(() => getPokerHand([3, 2, 3, 4.1, 5]), /Values must be integers/);
            });
            it('should throw `Values must be integers` error for object element', () => {                 
                assert.throws(() => getPokerHand([3, 2, 3, {'asd': 'asd'}, 5]), /Values must be integers/);
            });
        });
        describe('Values must be in the range', () => {
            it('should throw `Values must be in the range from 1 to 6` error for more then 6', () => {                 
                assert.throws(() => getPokerHand([3, 2, 3, 7, 5]), /Values must be in the range from 1 to 6/);
            });
            it('should throw `Values must be in the range from 1 to 6` error for less then 1', () => {                 
                assert.throws(() => getPokerHand([3, 2, 3, 0, 5]), /Values must be in the range from 1 to 6/);
            });
            it('should throw `Values must be in the range from 1 to 6` error for negative number', () => {                 
                assert.throws(() => getPokerHand([3, 2, 3, -1, 5]), /Values must be in the range from 1 to 6/);
            });
        });
    });
    // Напишите тесты на ваш замечательный код здесь
});
