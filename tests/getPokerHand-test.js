const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    describe('positive', () =>
    {
        it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
            const actual = getPokerHand([1, 1, 1, 1, 1]);

            assert.equal(actual, 'Покер');
        });
        it('should return `Каре` for [2, 2, 2, 6, 2]', () => {
            const actual = getPokerHand([2, 2, 2, 6, 2]);

            assert.equal(actual, 'Каре');
        });
        it('should return `Фулл хаус` for [2, 2, 2, 3, 3]', () => {
            const actual = getPokerHand([2, 2, 2, 3, 3]);

            assert.equal(actual, 'Фулл хаус');
        });
        it('should return `Тройка` for [2, 2, 2, 6, 3]', () => {
            const actual = getPokerHand([2, 2, 2, 6, 3]);

            assert.equal(actual, 'Тройка');
        });
        it('should return `Две пары` for [2, 2, 6, 6, 3]', () => {
            const actual = getPokerHand([2, 2, 6, 6, 3]);

            assert.equal(actual, 'Две пары');
        });
        it('should return `Пара` for [1, 2, 6, 6, 3]', () => {
            const actual = getPokerHand([1, 2, 6, 6, 3]);

            assert.equal(actual, 'Пара');
        });
        it('should return `Лучшая кость-5` for [1, 2, 3, 4, 5]', () => {
            const actual = getPokerHand([1, 2, 3, 4, 5]);

            assert.equal(actual, 'Лучшая кость-5');
        });
        it('should return `Лучшая кость-6` for [6, 2, 3, 4, 5]', () => {
            const actual = getPokerHand([6, 2, 3, 4, 5]);

            assert.equal(actual, 'Лучшая кость-6');
        });
        it('should return `Лучшая кость-6` for [0x6, 2, 3, 4, 5]', () => {
            const actual = getPokerHand([0x6, 2, 3, 4, 5]);

            assert.equal(actual, 'Лучшая кость-6');
        });
    });
    describe('negative', () =>
    {
        it('should throw error 0 array element is not a valid number for [\'z\', 1, 1, 1, 1]', () => {
            try
            {
                getPokerHand(['z', 1, 1, 1, 1]);
                throw new Error('0 array element is not a valid number')
            } 
            catch(error)
            {
                assert.equal(error.message, '0 array element is not a valid number');
            }
        });
        it('should throw error expected array of length 5. for [1, 1, 1, 1, 1, 1]', () => {
            const nc1 = () => getPokerHand([1, 1, 1, 1, 1, 1]);
            assert.throws(nc1, /expected array of length 5/);
        });
        it('should throw error expected array of length 5. for \'aaaaaaaaaaaaaaaaaaaa\'', () => {
            const nc2 = () => getPokerHand('aaaaaaaaaaaaaaaaaaaa');
            assert.throws(nc2, /expected array of length 5/);
        });
        it('should throw error 1 array element is not a valid number for [0x6, \'2\', 3, 4, 5]', () => {
            const nc3 = () => getPokerHand([0x6, '2', 3, 4, 5]);
            assert.throws(nc3, /1 array element is not a valid number/);
        });
        it('should throw error expected array of length 5. for {}', () => {
            const nc4 = () => getPokerHand({});
            assert.throws(nc4, /expected array of length 5/);
        });
        it('should throw error 1 array element is not a valid number for [0x6, -5, 3, 4, 5]', () => {
            const nc5 = () => getPokerHand([0x6, -5, 3, 4, 5]);
            assert.throws(nc5, /1 array element is not a valid number/);
        });
        it('should throw error 2 array element is not a valid number for [0x6, 5, 3.2, 4, 5]', () => {
            const nc6 = () => getPokerHand([0x6, 5, 3.2, 4, 5]);
            assert.throws(nc6, /2 array element is not a valid number/);
        });
        it('should throw error expected array of length 5. for [1, 1, 1, 1]', () => {
            const nc7 = () => getPokerHand([1, 1, 1, 1]);
            assert.throws(nc7, /expected array of length 5/);
        });
    });
});
