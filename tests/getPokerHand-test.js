const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    describe('positive', () => {
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

        it('should return `Тройка` for [1, 1, 1, 3, 2]', () => {
            const actual = getPokerHand([1, 1, 1, 3, 2]);

            assert.equal(actual, 'Тройка');
        });

        it('should return `Две пары` for [1, 1, 2, 3, 2]', () => {
            const actual = getPokerHand([1, 1, 2, 3, 2]);

            assert.equal(actual, 'Две пары');
        });

        it('should return `Пара` for [1, 1, 3, 4, 2]', () => {
            const actual = getPokerHand([1, 1, 3, 4, 2]);

            assert.equal(actual, 'Пара');
        });

        it('should return `Наивысшее очко` for [1, 3, 4, 5, 2]', () => {
            const actual = getPokerHand([1, 3, 4, 5, 2]);

            assert.equal(actual, 'Наивысшее очко');
        });
    });

    describe('negative', () => {
        it('should return Error(`it is not array`) for `string`', () => {
            const actual = () => getPokerHand('string');

            assert.throws(actual, /it is not array/);
        });

        it('should return Error(`it is not array`) for 12345', () => {
            const actual = () => getPokerHand(12345);

            assert.throws(actual, /it is not array/);
        });

        it('should return Error(`it is not array`) for {}', () => {
            const actual = () => getPokerHand({});

            assert.throws(actual, /it is not array/);
        });

        it('should return Error(`it is not array`) for undefined', () => {
            const actual = () => getPokerHand(undefined);

            assert.throws(actual, /it is not array/);
        });

        it('should return Error(`it is not array`) for null', () => {
            const actual = () => getPokerHand(null);

            assert.throws(actual, /it is not array/);
        });

        it('should return Error(`the array must contain 5 elements`) for [1, 2, 3, 4, 5, 6]', () => {
            const actual = () => getPokerHand([1, 2, 3, 4, 5, 6]);

            assert.throws(actual, /the array must contain 5 elements/);
        });

        it('should return Error(`element with index 1 not number`) for [1, `2`, 3, 4, 5]', () => {
            const actual = () => getPokerHand([1, '2', 3, 4, 5]);

            assert.throws(actual, /element with index 1 not number/);
        });

        it('should return Error(`element with index 1 not number`) for [1, {}, 3, 4, 5]', () => {
            const actual = () => getPokerHand([1, {}, 3, 4, 5]);

            assert.throws(actual, /element with index 1 not number/);
        });

        it('should return Error(`element with index 1 not number`) for [1, null, 3, 4, 5]', () => {
            const actual = () => getPokerHand([1, null, 3, 4, 5]);

            assert.throws(actual, /element with index 1 not number/);
        });

        it('should return Error(`element with index 1 not number`) for [1, undefined, 3, 4, 5]', () => {
            const actual = () => getPokerHand([1, undefined, 3, 4, 5]);

            assert.throws(actual, /element with index 1 not number/);
        });

        it('should return Error(`element with index 1 not number`) for [1, , 3, 4, 5]', () => {
            const actual = () => getPokerHand([1, , 3, 4, 5]);

            assert.throws(actual, /element with index 1 not number/);
        });

        it('should return Error(`element with index 1 not input interval 1-6`) for [1, 0, 3, 4, 5]', () => {
            const actual = () => getPokerHand([1, 0, 3, 4, 5]);

            assert.throws(actual, /element with index 1 not input interval 1-6/);
        });

        it('should return Error(`element with index 1 not input interval 1-6`) for [1, 0, 3, 4, 5]', () => {
            const actual = () => getPokerHand([1, -1, 3, 4, 5]);

            assert.throws(actual, /element with index 1 not input interval 1-6/);
        });

        it('should return Error(`element with index 1 not input interval 1-6`) for [1, 0, 3, 4, 5]', () => {
            const actual = () => getPokerHand([1, 7, 3, 4, 5]);

            assert.throws(actual, /element with index 1 not input interval 1-6/);
        });

        it('should return Error(`element with index 1 not input interval 1-6`) for [1, 0, 3, 4, 5]', () => {
            const actual = () => getPokerHand([1, 8, 3, 4, 5]);

            assert.throws(actual, /element with index 1 not input interval 1-6/);
        });

        it('should return Error(`element with index 1 not input interval 1-6`) for [1, 0, 3, 4, 5]', () => {
            const actual = () => getPokerHand([1, 50, 3, 4, 5]);

            assert.throws(actual, /element with index 1 not input interval 1-6/);
        });
    });
});
