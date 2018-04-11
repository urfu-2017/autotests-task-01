const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('positive:', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);
        assert.equal(actual, 'Покер');
    });
    it('should return `Каре` for [1, 1, 1, 1, 6]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 6]);
        assert.equal(actual, 'Каре');
    });
    it('should return `Фул Хаус` for [1, 1, 1, 3, 3]', () => {
        const actual = getPokerHand([1, 1, 1, 3, 3]);
        assert.equal(actual, 'Фул Хаус');
    });
    it('should return `Тройка` for [1, 4, 2, 2, 2]', () => {
        const actual = getPokerHand([1, 4, 2, 2, 2]);
        assert.equal(actual, 'Тройка');
    });
    it('should return `Две Пары` for [1, 1, 4, 4, 5]', () => {
        const actual = getPokerHand([1, 1, 4, 4, 5]);
        assert.equal(actual, 'Две Пары');
    });
    it('should return `Пара` for [1, 1, 3, 5, 6]', () => {
        const actual = getPokerHand([1, 1, 3, 5, 6]);
        assert.equal(actual, 'Пара');
    });
    it('should return `Кикер` for [1, 2, 3, 4, 6]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 6]);
        assert.equal(actual, 'Кикер');
    });
});
describe('negative:', () => {
    describe('ArrayLength:', () => {
        it('should throw `You need to throw 5 dice` error for throw 6 dice', () => {                 
            assert.throws(() => getPokerHand([1,2,3,4,5,6]), /You need to throw 5 dice/);
        });
        it('should throw `You need to throw 5 dice` error for throw 4 dice', () => {                 
            assert.throws(() => getPokerHand([1,2,3,4]), /You need to throw 5 dice/);
        });
    });
    describe('Range of numbers:', () => {
        it('should throw `Range of numbers on dice from 1 to 6` error for number more than 6', () => {                 
            assert.throws(() => getPokerHand([1,2,3,4,7]), /Range of numbers on dice from 1 to 6/);
        });
        it('should throw `Range of numbers on dice from 1 to 6` error for number less than 1', () => {                 
            assert.throws(() => getPokerHand([1,2,0,4,6]), /Range of numbers on dice from 1 to 6/);
        });  
    });
    describe('Integer:', () => {
        it('should throw `You must enter an integer` error for not an integer element', () => {                 
            assert.throws(() => getPokerHand([1,2,4.4,4,6]), /You must enter an integer/);
        }); 
        it('should throw `You must enter an integer` error for string element', () => {                 
            assert.throws(() => getPokerHand([1,2,'4',4,6]), /You must enter an integer/);
        });
        it('should throw `You must enter an integer` error for object element', () => {                 
            assert.throws(() => getPokerHand([1,2,{1:1},4,3]), /You must enter an integer/);
        });
        it('should throw `You must enter an integer` error for NaN element', () => {                 
            assert.throws(() => getPokerHand([1,2,NaN,4,3]), /You must enter an integer/);
        });
        it('should throw `You must enter an integer` error for null element', () => {                 
            assert.throws(() => getPokerHand([1,2,null,4,3]), /You must enter an integer/);
        });
        it('should throw `You must enter an integer` error for undefined element', () => {                 
            assert.throws(() => getPokerHand([1,2,undefined,4,3]), /You must enter an integer/);
        });
    });
    describe('isArray:', () => {
        it('should throw `You must enter an array` error for integer', () => {                 
            assert.throws(() => getPokerHand(1,2,3,4,5), /You must enter an array/);
        }); 
        it('should throw `You must enter an array` error for string', () => {                 
            assert.throws(() => getPokerHand('1,2,3,4,5'), /You must enter an array/);
        });
        it('should throw `You must enter an array` error for NaN', () => {                 
            assert.throws(() => getPokerHand(NaN), /You must enter an array/);
        });
        it('should throw `You must enter an array` error for undefined', () => {                 
            assert.throws(() => getPokerHand(undefined), /You must enter an array/);
        });
        it('should throw `You must enter an array` error for null', () => {                 
            assert.throws(() => getPokerHand(null), /You must enter an array/);
        });
        it('should throw `You must enter an array` error for object', () => {                 
            assert.throws(() => getPokerHand({1:1}), /You must enter an array/);
        });
    });
});
