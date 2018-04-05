const _ = require('lodash')


const FLUSH           = _.constant(         'Покер')
const FOUR_OF_A_KIND  = _.constant(          'Каре')
const FULL_HOUSE      = _.constant(     'Фулл хаус')
const THREE_OF_A_KIND = _.constant(        'Тройка')
const TWO_PAIR        = _.constant(      'Две пары')
const PAIR            = _.constant(          'Пара')
const HIGH_CARD       = _.constant('Наивысшее очко')


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
 * @param { Number[] } dice - Кости, для которых нужно посчитать группы
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
 * @param { Object } freqs - Частоты групп
 * @returns { String } - Название комбинации
 */
const freqsToHand = _.cond([
    [ { '5': 1         } , FLUSH           ],
    [ { '4': 1         } , FOUR_OF_A_KIND  ],
    [ { '3': 1, '2': 1 } , FULL_HOUSE      ],
    [ { '3': 1         } , THREE_OF_A_KIND ],
    [ { '2': 2         } , TWO_PAIR        ],
    [ { '2': 1         } , PAIR            ],
    [ { '1': 5         } , HIGH_CARD       ],
])


/**
 * По набору костей из пяти элементов определяет комбинацию
 * 
 * @param { Number[] } dice - Кости, для которых нужно определить комбинацию
 * @returns { String } - Название комбинации
 */
const diceToHand = _.flow(
    diceToFreqs,
    freqsToHand
)


module.exports = diceToHand
