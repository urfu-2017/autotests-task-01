'use strict';

const config = require('./config');
const matchers = require('./matchers');

module.exports = dices => {
    if (!Array.isArray(dices)) {
        throw new Error(config.errors.notArray);
    }

    if (dices.length !== 5) {
        throw new Error(config.errors.invalidCount);
    }

    if (dices.find(n => ![1, 2, 3, 4, 5, 6].includes(n))) {
        throw new Error(config.errors.invalidValues);
    }

    return config.names[config.strength.find(c => matchers[c](dices))];
};
