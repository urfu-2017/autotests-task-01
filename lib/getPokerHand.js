'use strict';
const _ = require('lodash');

function getPokerHand(dice) {
    if(!_.isArray(dice)) {
        throw new Error('Current value is not array');
    }

    if(arguments.length != 1) {
        throw new Error('There must be only one argument');
    }

    if(dice.length != 5) {
        throw new Error('There must be 5 elements');
    }

    for (let element of dice) {
        if (!_.inRange(element, 1, 7)) {
            throw new RangeError('Element is out of range from one to six');
        }
        if (!_.isInteger(element)) {
            throw new TypeError('Element must be integer');
        }
    }

    let counterArray = _.toString(_.toArray(_.countBy(dice)).sort());
    let combinations = [{
        '5': 'Покер',
        '1,4': 'Каре',
        '2,3': 'Фулл хаус',
        '1,1,3' : 'Тройка',
        '1,2,2': 'Две пары',
        '1,1,1,2': 'Пара',
        '1,1,1,1,1': 'Наивысшее очко'
    }];

    return _.toString(_.map(combinations, _.iteratee(counterArray)));
}

module.exports = getPokerHand;
