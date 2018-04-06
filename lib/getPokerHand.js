const _ = require('lodash')
const fp = require('lodash/fp')


const FLUSH           = _.constant(         'Покер')
const FOUR_OF_A_KIND  = _.constant(          'Каре')
const FULL_HOUSE      = _.constant(     'Фулл хаус')
const THREE_OF_A_KIND = _.constant(        'Тройка')
const TWO_PAIR        = _.constant(      'Две пары')
const PAIR            = _.constant(          'Пара')
const HIGH_CARD       = _.constant('Наивысшее очко')


/**
 * Принимает ошибку, возвращает функцию,
 *  при вызове которой эта ошибка выбрасывается
 * 
 * @param { Error } error
 * @returns { Function }
 */
const throw_ = (error) => () => { throw error }


/**
 * Делает проверку набора костей
 * При ошибке выбрасывает исключение
 * При отсутствии ошибок возвращает исходный набор
 * 
 * @param { Number[] } - Набор костей
 * @returns { Number[] } - Исходный набор костей
 * @throws { Error } - Ошибка валидации набора
 */
const validateDice = _.cond([
    [
        fp.negate(fp.isArray),
        throw_(new TypeError('Dice must be an array'))
    ],
    [
        fp.negate(fp.flow(fp.size, fp.isEqual(5))),
        throw_(new RangeError('Dice must contain exactly 5 elements'))
    ],
    [
        fp.negate(fp.every(fp.isInteger)),
        throw_(new TypeError('Dice must contain only integers'))
    ],
    [
        fp.negate(fp.every(fp.inRange(1, 6))),
        throw_(new RangeError('Dice must contain numbers from 1 to 6'))
    ],
    [
        _.stubTrue,
        _.identity
    ]
])


/**
 * Группирует одинаковые кости и считает частоты этих групп
 * 
 * Например:
 *  - для [1, 1, 1] вернет { '3': 1 }
 *      (группа из трех одинаковых элементов повторилась один раз)
 *  - для [1, 2, 2] вернет { '2': 1, '1': 1 }
 *      (группа из двех одинаковых элементов повторилась один раз и
 *       группа из одного одинакового элемента повторилась один раз)
 * 
 * @param { Number[] } - Кости, для которых нужно посчитать частоты групп
 * @returns { Object } - Частоты групп
 */
const diceToFreqs = _.flow(_.countBy, _.values, _.countBy)


/**
 * По частотам групп определяет комбинацию
 * 
 * Пять костей одного вида                        - Покер
 * Четыре кости одного вида                       - Каре
 * Три кости одного вида + пара                   - Фулл хаус
 * Три кости одного вида                          - Тройка
 * Две кости одного вида и две кости другого вида - Две пары
 * Две кости одного вида                          - Пара
 * Во всех остальных случаях                      - Наивысшее очко
 * 
 * @param { Object } - Частоты групп
 * @returns { String } - Название комбинации
 */
const freqsToHand = _.cond([
    [ { '5': 1 }         , FLUSH           ],
    [ { '4': 1 }         , FOUR_OF_A_KIND  ],
    [ { '3': 1, '2': 1 } , FULL_HOUSE      ],
    [ { '3': 1 }         , THREE_OF_A_KIND ],
    [ { '2': 2 }         , TWO_PAIR        ],
    [ { '2': 1 }         , PAIR            ],
    [ _.stubTrue         , HIGH_CARD       ],
])


/**
 * По набору из пяти костей определяет комбинацию
 * Кость - целое число в диапазоне от 1 до 6
 * 
 * @param { Number[] } - Кости, для которых нужно определить комбинацию
 * @returns { String } - Название комбинации
 */
const diceToHand = _.flow(
    validateDice,
    diceToFreqs,
    freqsToHand
)


module.exports = diceToHand
