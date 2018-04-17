const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    [
        { dice: {}, expected: 'Не массив!' },
        { dice: [1,2], expected: 'Значений должно быть 5!' },
        { dice: [2,3,4,5,7], expected: 'Значения должны быть от 1 до 6!' },
        { dice: [2,3,4,5,0], expected: 'Значения должны быть от 1 до 6!' },
        { dice: [0.6,3,4,6,1], expected: 'Значения должны быть целыми!' },
        { dice: ['a',3,4,6,1], expected: 'Значения должны быть целыми!' },
    ].forEach(({ dice, expected }) =>
        it(`should Error '${expected}' for '${dice}'`, () => {
            assert.throws(() => getPokerHand(dice), new RegExp(expected));
        })
    );

    [
        { dice: [1, 1, 1, 1, 1], expected: 'Покер' },
        { dice: [3, 3, 2, 3, 3], expected: 'Каре' },
        { dice: [1, 2, 1, 2, 1], expected: 'Фулл хаус' },
        { dice: [4, 5, 4, 4, 2], expected: 'Тройка' },
        { dice: [6, 6, 2, 1, 2], expected: 'Две пары' },
        { dice: [4, 2, 1, 3, 4], expected: 'Пара' },
        { dice: [6, 5, 3, 2, 1], expected: 'Наивысшее очко' },
    ].forEach(({ dice, expected }) =>
        it(`should return '${expected}' for '${dice}`, () => {
            const actual = getPokerHand(dice);

            assert.equal(actual, expected);
        })
    );
});
