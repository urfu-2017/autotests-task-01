'use strict';

const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

const config = require('../lib/config');

describe('getPokerHand', () => {
    [
        { dices: [1, 1, 1, 1, 1], expected: config.names.poker },
        { dices: [6, 6, 6, 6, 6], expected: config.names.poker },
        { dices: [1, 1, 1, 1, 2], expected: config.names.four },
        { dices: [1, 1, 2, 1, 1], expected: config.names.four },
        { dices: [1, 1, 1, 2, 2], expected: config.names.fullHouse },
        { dices: [1, 2, 1, 1, 2], expected: config.names.fullHouse },
        { dices: [1, 1, 1, 2, 3], expected: config.names.triple },
        { dices: [1, 2, 1, 1, 3], expected: config.names.triple },
        { dices: [1, 1, 2, 2, 3], expected: config.names.pairs },
        { dices: [1, 2, 1, 2, 3], expected: config.names.pairs },
        { dices: [1, 1, 2, 3, 4], expected: config.names.pair },
        { dices: [1, 2, 1, 3, 4], expected: config.names.pair },
        { dices: [1, 2, 3, 4, 5], expected: config.names.best }
    ].forEach(testCase =>
        it(`should return '${testCase.expected}' for ${JSON.stringify(testCase.dices)}`, () =>
            assert.equal(getPokerHand(testCase.dices), testCase.expected)
        )
    );

    [
        { dices: [], expectedError: config.errors.invalidCount },
        { dices: [1, 2, 3, 4], expectedError: config.errors.invalidCount },
        { dices: [1, 2, 3, 4, 5, 1], expectedError: config.errors.invalidCount },
        { dices: [1, 2, 3, 4, 7], expectedError: config.errors.invalidValues },
        { dices: [1, 2, 3, 4, -1], expectedError: config.errors.invalidValues },
        { dices: [1, 2, 3, 4, 1.2], expectedError: config.errors.invalidValues },
        { dices: [1, 2, 3, 4, 'a'], expectedError: config.errors.invalidValues },
        { dices: null, expectedError: config.errors.notArray },
        { dices: 1234, expectedError: config.errors.notArray },
        { dices: undefined, expectedError: config.errors.notArray }
    ].forEach(testCase =>
        it(`should raise '${testCase.expectedError}' for ${JSON.stringify(testCase.dices)}`, () =>
            assert.throws(() => getPokerHand(testCase.dices), new RegExp(testCase.expectedError))
        )
    );
});
