const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    describe('Correct input', () => {
        const nameToCombinations = {
            Покер: [
                [1, 1, 1, 1, 1],
                [5, 5, 5, 5, 5]
            ],
            Каре: [
                [1, 1, 2, 1, 1],
                [1, 5, 5, 5, 5]
            ],
            'Фулл хаус': [
                [2, 2, 2, 1, 1],
                [6, 3, 6, 3, 6]
            ],
            Тройка: [
                [1, 2, 6, 6, 6],
                [5, 2, 5, 1, 5],
            ],
            'Две пары': [
                [5, 6, 2, 2, 5],
                [2, 1, 3, 2, 3],
            ],
            Пара: [
                [6, 5, 4, 4, 3],
                [2, 3, 6, 3, 1],
            ],
            'Наивысшее очко': [
                [1, 2, 3, 4, 5],
                [6, 2, 4, 1, 5]
            ]
        };

        for (let combinationName in nameToCombinations) {
            describe(`${combinationName}`, () => {
                for (let combination of nameToCombinations[combinationName]) {
                    it(`should return \`${combinationName}\` for [${combination}]`, () => {
                        const actual = getPokerHand(combination);

                        assert.equal(actual, `${combinationName}`);
                    });
                }
            });
        }
    });

    describe('Incorrect input', () => {
        describe('Не массив', () => {
            const inputs = ['lala', 5, undefined, null, () => {}, true, {}];
            inputs.forEach(input => {
                it(`should throw error for type ${typeof input}: ${input}`, () => {
                    assert.throws(() => getPokerHand(input))
                });
            })
        });

        describe('Некорректный массив', () => {
            const arrays = [
                [],
                [5],
                [4, 2, 3, 4],
                [6, 5, 3, 1, 2, 6]
            ];
            arrays.forEach(array => {
                it(`should throw error for array: [${array}]`, () => {
                    assert.throws(() => getPokerHand(array))
                });
            })
        });
    });
});
