'use strict';

const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

const names = require('../lib/combinations').names;

describe('getPokerHand', () => {
    const testCases = [
        { arg: [1, 1, 1, 1, 1], expected: names.poker },
        { arg: [2, 2, 2, 2, 2], expected: names.poker },
        { arg: [3, 3, 3, 3, 3], expected: names.poker },
        { arg: [1, 1, 1, 1, 2], expected: names.four },
        { arg: [1, 1, 2, 1, 1], expected: names.four },
        { arg: [3, 3, 5, 3, 3], expected: names.four },
        { arg: [1, 1, 1, 2, 2], expected: names.fullHouse },
        { arg: [2, 1, 1, 1, 2], expected: names.fullHouse },
        { arg: [4, 1, 4, 1, 1], expected: names.fullHouse },
        { arg: [1, 1, 1, 2, 3], expected: names.triple },
        { arg: [1, 2, 1, 1, 3], expected: names.triple },
        { arg: [3, 1, 3, 3, 5], expected: names.triple },
        { arg: [1, 1, 2, 2, 3], expected: names.pairs },
        { arg: [1, 2, 1, 2, 3], expected: names.pairs },
        { arg: [3, 3, 5, 2, 5], expected: names.pairs },
        { arg: [1, 1, 2, 3, 4], expected: names.pair },
        { arg: [2, 3, 4, 5, 5], expected: names.pair },
        { arg: [2, 1, 5, 3, 2], expected: names.pair },
        { arg: [1, 2, 3, 4, 5], expected: names.best },
        { arg: [5, 4, 3, 2, 1], expected: names.best },
        { arg: [1, 3, 2, 5, 4], expected: names.best },
        { arg: [1, 2, 3, 4], expected: 'error' },
        { arg: [1, 2, 3, 4, 5, 1], expected: 'error' },
        { arg: [1, 2, 3, 4, 6], expected: 'error' },
        { arg: [1, 2, 3, 4, -1], expected: 'error' },
        { arg: null, expected: 'error' },
        { arg: 1234, expected: 'error' },
        { arg: [], expected: 'error' }
    ];

    testCases.forEach(testCase => {
        it(`should return '${testCase.expected}' for ${testCase.arg}`, () => {
            if (testCase.expected === 'error') {
                assert.throws(() => getPokerHand(testCase.arg));
            } else {
                assert.equal(getPokerHand(testCase.arg), testCase.expected);
            }
        });
    });
});
