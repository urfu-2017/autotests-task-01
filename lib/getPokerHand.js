'use strict';

const combs = require('./combinations');
const matchers = require('./matchers');

module.exports = dices => {
    if (dices.length > 5 || dices.find(n => n < 1 || n > 5)) {
        throw new Error('Invalid argument. It\'s not a five dices');
    }

    return combs.names[combs.strength.find(c => matchers[c](dices))];
};
