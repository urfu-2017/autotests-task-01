'use strict';

const combs = require('./combinations');
const matchers = require('./matchers');

module.exports = dices => {
    if (!Array.isArray(dices) || dices.length !== 5 || dices.find(n => n < 1 || n > 5)) {
        throw new Error('Invalid argument. It must be array of numbers in range(1, 6).');
    }

    return combs.names[combs.strength.find(c => matchers[c](dices))];
};
