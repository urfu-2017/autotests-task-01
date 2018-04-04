const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    describe('positive', () => {
        describe('simple case', () => {
            it(`should return 'Покер'\t\tfor '[1, 1, 1, 1, 1]'`, () => {
                const actual = getPokerHand([1, 1, 1, 1, 1]);

                assert.equal(actual, 'Покер');
            })
            it(`should return 'Пара'\t\tfor '[3, 2, 4, 3, 5]'`, () => {
                const actual = getPokerHand([3, 2, 4, 3, 5]);

                assert.equal(actual, 'Пара');
            })
            it(`should return 'Наивысшее очко'for '[3, 4, 1, 2, 6]'`, () => {
                const actual = getPokerHand([3, 4, 1, 2, 6]);

                assert.equal(actual, 'Наивысшее очко');
            })
        })
        describe('2 difference', () => {
            it(`should return 'Каре'\t\tfor '[2, 2, 2, 3, 2]'`, () => {
                const actual = getPokerHand([2, 2, 2, 3, 2]);

                assert.equal(actual, 'Каре');
            })
            it(`should return 'Фулл хаус'\tfor '[3, 3, 4, 3, 4]'`, () => {
                const actual = getPokerHand([3, 3, 4, 3, 4]);

                assert.equal(actual, 'Фулл хаус');
            })
        })
        describe('3 difference number', () => {
            it(`should return 'Две пары'\tfor '[1, 1, 5, 3, 5]'`, () => {
                const actual = getPokerHand([1, 1, 5, 3, 5]);

                assert.equal(actual, 'Две пары');
            })
            it(`should return 'Тройка'\tfor '[3, 2, 4, 3, 5]'`, () => {
                const actual = getPokerHand([6, 6, 6, 5, 2]);

                assert.equal(actual, 'Тройка');
            })
        })
        describe('onEdge', () => {
            it(`should return 'Каре'\t\tfor '[1, 1, 1, 1, 6]'`, () => {
                const actual = getPokerHand([1, 1, 1, 1, 6]);

                assert.equal(actual, 'Каре');
            })
            it(`should return 'Покер'\t\tfor '[6, 6, 6, 6, 6]'`, () => {
                const actual = getPokerHand([6, 6, 6, 6, 6]);

                assert.equal(actual, 'Покер');
            })
            it(`should return 'Каре'\t\tfor '[6, 6, 6, 6, 1]'`, () => {
                const actual = getPokerHand([6, 6, 6, 6, 1]);

                assert.equal(actual, 'Каре');
            })
        })
        describe('trickyNumber', () => {
            it(`should return 'Наивысшее очко'for '[3, 2.0, 1.0, 4, 6]'`, () => {
                const actual = getPokerHand([3, 2.0, 1.0, 4, 6]);

                assert.equal(actual, 'Наивысшее очко');
            })
            it(`should return 'Пара'\t\tfor '[0d5, 0b11, 0b01, 0x4, 0o3]'`, () => {
                const actual = getPokerHand([5, 0b11, 0b01, 0x4, 0o3]);

                assert.equal(actual, 'Пара');
            })
            it(`should return 'Тройка'\tfor '[+3, +2, 3, +3, 1]'`, () => {
                const actual = getPokerHand([3, +2, 03, +3, 1]);

                assert.equal(actual, 'Тройка');
            })
        })
    })
    describe('negative', () => {
        describe('NaN in array', () => {
            it(`should throw error, if the array contains string`, () => {
                const testCb = () => getPokerHand([3, 2, '4', 3, 5]);

                assert.throws(testCb, /One or more elements in array is not a number/);
            })
            it(`should throw error, if the array contains object`, () => {
                const testCb = () => getPokerHand([6, {6:6}, 6, 1, 1]);

                assert.throws(testCb, /One or more elements in array is not a number/);
            })
            it(`should throw error, if the array contains another array`, () => {
                const testCb = () => getPokerHand([4, [6], 1, 2, 3]);

                assert.throws(testCb, /One or more elements in array is not a number/);
            })
            it(`should throw error, if the array contains undefined value`, () => {
                const testCb = () => getPokerHand([4, null, 1, undefined, 3]);

                assert.throws(testCb, /One or more elements in array is not a number/);
            })
        })
        describe('arrayLength', () => {
            it(`should throw error, if length of the array is MORE then 5`, () => {
                const testCb = () => getPokerHand([3, 2, 3, 3, 5, 4, 5, 1]);

                assert.throws(testCb, /Length of input array more then 5/);
            })
            it(`should throw error, if length of the array is LESS then 5`, () => {
                const testCb = () => getPokerHand([1, 1]);

                assert.throws(testCb, /Length of input array less then 5/);
            })
        })
        describe('notAnArray', () => {
            it(`should throw error, if the array contains string`, () => {
                const testCb = () => getPokerHand('[3, 2, 4, 3, 5]');

                assert.throws(testCb, /Input parameter is not type of Array/);
            })
            it(`should throw error, if the array contains object`, () => {
                const testCb = () => getPokerHand(3, 4, 5, 1, 6);

                assert.throws(testCb, /Input parameter is not type of Array/);
            })
        })
        describe('overEdgeNumber', () => {
            it(`should throw error, if one of number more then 6`, () => {
                const testCb = () => getPokerHand([3, 7, 5, 1, 6]);

                assert.throws(testCb, /One or more elements in array is out of range/);
            })
            it(`should throw error, if one of number less then 1`, () => {
                const testCb = () => getPokerHand([3, 4, 5, 0, 6]);

                assert.throws(testCb, /One or more elements in array is out of range/);
            })
            it(`should throw error, if one of number less then 1 (over)`, () => {
                const testCb = () => getPokerHand([3, -5, 5, 1, 6]);

                assert.throws(testCb, /One or more elements in array is out of range/);
            })
            it(`should throw error, if one of number has type is float`, () => {
                const testCb = () => getPokerHand([3.5, 4, 5, 1, 6]);

                assert.throws(testCb, /One or more elements in array is out of range/);
            })
        })
    })
});
