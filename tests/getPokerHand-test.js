const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

function getCombinationTest(name, dice) {
    return it(`should return '${name}' for [${dice}]`, () => {
        const actual = getPokerHand(dice);
        assert.equal(actual, name);
    });
}

function getErrorTest(testName, dice) {
    return it(`should throw error ${testName}`, () => {
        assert.throws(() => getPokerHand(dice),
            'Dice should contains only 5 integer numbers from 1 to 6');
    });
}

describe('getPokerHand', () => {
    getCombinationTest('Покер', [1, 1, 1, 1, 1]);
    getCombinationTest('Каре',[3, 1, 3, 3, 3]);
    getCombinationTest('Фулл хаус', [5, 2, 5, 5, 2]);
    getCombinationTest('Тройка', [4, 6, 1, 6, 6]);
    getCombinationTest('Две пары', [2, 4, 4, 1, 2]);
    getCombinationTest('Пара', [6, 4, 4, 1, 2]);
    getCombinationTest('Наивысшее очко', [6, 4, 3, 1, 2]);


    getErrorTest('on values more 6', [6, 7, 4, 1, 2]);
    getErrorTest('on values less 1', [6, 3, 4, 1, -5]);
    getErrorTest('on array with string values', [6, 3, 'hey', 1, 3]);
    getErrorTest('on array with float values', [6, 3, 1, 1, 1.9]);
    getErrorTest('when count of dice throw more 5', [6, 3, 1, 1, 3, 4]);
    getErrorTest('when count of dice throw less 5', [6, 3, 1, 1]);
    getErrorTest('when input is a string', 'hey');
    getErrorTest('when input is empty');
});
