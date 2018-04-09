const assert = require('assert')
const _ = require('lodash')
const getPokerHand = require('../lib/getPokerHand')

describe('getPokerHand', () => {
    describe('Normal cases', () => {
        const hands = [
            [[1, 1, 1, 1, 1], 'Покер'         ],
            [[1, 1, 2, 1, 1], 'Каре'          ],
            [[1, 2, 1, 2, 1], 'Фулл хаус'     ],
            [[1, 2, 1, 3, 1], 'Тройка'        ],
            [[1, 2, 1, 3, 2], 'Две пары'      ],
            [[1, 2, 3, 2, 4], 'Пара'          ],
            [[1, 2, 3, 4, 5], 'Наивысшее очко']
        ]

        _.each(hands, ([dice, hand]) => {
            it(`should return "${hand}" for [${dice}]`, () => {
                const actual = getPokerHand(dice)
                assert.equal(actual, hand)
            })
        })
    })

    describe('Validation errors', () => {
        const validations = [
            [
                /Dice must be an array/,
                [
                    '',
                    null,
                    0,
                    false,
                    {},
                    new Set()
                ]
            ],
            [
                /Dice must contain exactly 5 elements/,
                [
                    [],
                    [1],
                    [1, 1, 1, 1, 1, 1]
                ]
            ],
            [
                /Dice must contain only integers/,
                [
                    [1, 1, 1, 1, '1'],
                    [1, 1, 1, 1, 1.2],
                    [1, 1, 1, 1, null]
                ]
            ],
            [
                /Dice must contain numbers from 1 to 6/,
                [
                    [1, 1, 1, 1, 7],
                    [1, 1, 1, 1, 0],
                    [1, 1, 1, 1, -1]
                ]
            ]
        ]

        _.each(validations, ([error, examples]) => {
            describe(`Check ${error}`, () => {
                _.each(examples, (example) => {
                    it(`should throw error for \`${example}\``, () => {
                        const actual = _.partial(getPokerHand, example)
                        assert.throws(actual, error)
                    })
                })
            })
        })
    })
})
