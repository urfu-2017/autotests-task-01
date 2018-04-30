const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('Функция getPokerHand', () => {
    describe('Корректные входные данные', () => {
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
                    it(`Должно вернуться \`${combinationName}\` c аргументом [${combination}]`, () => {
                        const actual = getPokerHand(combination);

                        assert.equal(actual, `${combinationName}`);
                    });
                }
            });
        }
    });

    describe('Некорректные входные данные', () => {
        describe('Не массив', () => {
            const inputs = ['lala', 5, undefined, null, () => {}, true, {}];
            inputs.forEach(input => {
                it(`Должно выброситься TypeError "getPokerHand: dice не является массивом" ` +
                    `c типом данных аргумента ${typeof input} (${input})`, () => {
                    assert.throws(
                        () => getPokerHand(input),
                        error => {
                            return Object.getPrototypeOf(error) === TypeError.prototype &&
                                /getPokerHand: dice не является массивом/.test(error.message);
                        }
                    )
                });
            })
        });

        describe('Пустой вход', () => {
            it(`Должно выброситься TypeError "getPokerHand: dice не является массивом" без аргументов`, () => {
                assert.throws(
                    () => getPokerHand(),
                    error => {
                        return Object.getPrototypeOf(error) === TypeError.prototype &&
                            /getPokerHand: dice не является массивом/.test(error.message);
                    }
                )
            });
        });

        describe('Некорректный массив', () => {
            {
                const array = [6, 5, 3, 1, 2, 6];
                it(`Должно выброситься Error "getPokerHand: массив dice имеет длину не 5" ` +
                    `для массива [${array}], размер которого больше 5 (длина = ${array.length})`, () => {
                    assert.throws(
                        () => getPokerHand(array),
                        error => {
                            return Object.getPrototypeOf(error) === Error.prototype &&
                                /getPokerHand: массив dice имеет длину не 5/.test(error.message);
                        }
                    )
                });
            }
            {
                const array = [6, 5, 3, 1];
                it(`Должно выброситься Error "getPokerHand: массив dice имеет длину не 5" ` +
                    `для массива [${array}], размер которого меньше 5 (длина = ${array.length})`, () => {
                    assert.throws(
                        () => getPokerHand(array),
                        error => {
                            return Object.getPrototypeOf(error) === Error.prototype &&
                                /getPokerHand: массив dice имеет длину не 5/.test(error.message);
                        }
                    )
                });
            }
            {
                const array = [6, 5, 3, 1, 'bug'];
                it(`Должно выброситься TypeError ` +
                    `"getPokerHand: массив dice содержит элемент, не являющийся целым числом от 1 до 6" ` +
                    `для массива [${array}], содержащего не числа ` +
                    `(некорректный_элемент = ${array[array.length - 1]})`, () => {
                    assert.throws(
                        () => getPokerHand(array),
                        error => {
                            return Object.getPrototypeOf(error) === TypeError.prototype &&
                                /getPokerHand: массив dice содержит элемент, не являющийся целым числом от 1 до 6/
                                    .test(error.message);
                        }
                    )
                });
            }
            {
                const array = [6, 5, 3, 1, 0];
                it(`Должно выброситься TypeError ` +
                    `"getPokerHand: массив dice содержит элемент, не являющийся целым числом от 1 до 6" ` +
                    `для массива [${array}], содержащего целые числа меньше 1 ` +
                    `(некорректный_элемент = ${array[array.length - 1]})`, () => {
                    assert.throws(
                        () => getPokerHand(array),
                        error => {
                            return Object.getPrototypeOf(error) === TypeError.prototype &&
                                /getPokerHand: массив dice содержит элемент, не являющийся целым числом от 1 до 6/
                                    .test(error.message);
                        }
                    )
                });
            }
            {
                const array = [6, 5, 3, 1, 7];
                it(`Должно выброситься TypeError ` +
                    `"getPokerHand: массив dice содержит элемент, не являющийся целым числом от 1 до 6" ` +
                    `для массива [${array}], содержащего целые числа больше 6 ` +
                    `(некорректный_элемент = ${array[array.length - 1]})`, () => {
                    assert.throws(
                        () => getPokerHand(array),
                        error => {
                            return Object.getPrototypeOf(error) === TypeError.prototype &&
                                /getPokerHand: массив dice содержит элемент, не являющийся целым числом от 1 до 6/
                                    .test(error.message);
                        }
                    )
                });
            }
            {
                const array = [6, 5, 3, 1, 5.5];
                it(`Должно выброситься TypeError ` +
                    `"getPokerHand: массив dice содержит элемент, не являющийся целым числом от 1 до 6" ` +
                    `для массива [${array}], содержащего дробные числа ` +
                    `(некорректный_элемент = ${array[array.length - 1]})`, () => {
                    assert.throws(
                        () => getPokerHand(array),
                        error => {
                            return Object.getPrototypeOf(error) === TypeError.prototype &&
                                /getPokerHand: массив dice содержит элемент, не являющийся целым числом от 1 до 6/
                                    .test(error.message);
                        }
                    )
                });
            }
        });
    });
});
