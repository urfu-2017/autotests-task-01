const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

function runCombinationTest(name, dice) {
    return it(`should return '${name}' for [${dice}]`, () => {
        const actual = getPokerHand(dice);
        assert.equal(actual, name);
    });
}

function runErrorTest(testName, errorMessage, dice) {
    return it(`should throw error ${testName}`, () => {
        assert.throws(() => getPokerHand(dice), errorMessage);
    });
}

describe('getPokerHand', () => {
    runCombinationTest('Покер', [1, 1, 1, 1, 1]);
    runCombinationTest('Каре',[3, 1, 3, 3, 3]);
    runCombinationTest('Фулл хаус', [5, 2, 5, 5, 2]);
    runCombinationTest('Тройка', [4, 6, 1, 6, 6]);
    runCombinationTest('Две пары', [2, 4, 4, 1, 2]);
    runCombinationTest('Пара', [6, 4, 4, 1, 2]);
    runCombinationTest('Наивысшее очко', [6, 4, 3, 1, 2]);

    
    runErrorTest('on values more 6', 'Dice should contains only numbers from 1 to 6', [6, 7, 4, 1, 2]);
    runErrorTest('on values less 1', 'Dice should contains only numbers from 1 to 6', [6, 3, 4, 1, -5]);
    runErrorTest('on array with string values', 'Dice should contains only integer numbers', [6, 3, 'hey', 1, 3]);
    runErrorTest('on array with float values', 'Dice should contains only integer numbers', [6, 3, 1, 1, 1.9]);
    runErrorTest('when count of dice throw more 5', 'Count of dice throw should equals 5', [6, 3, 1, 1, 3, 4]);
    runErrorTest('when count of dice throw less 5', 'Count of dice throw should equals 5', [6, 3, 1, 1]);
    runErrorTest('when input is a string', 'Input should be an array', 'hey');
    runErrorTest('when input is empty', 'Input should be an array');
});
