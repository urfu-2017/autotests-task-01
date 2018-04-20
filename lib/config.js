'use strict';

exports.names = {
    poker: 'Покер',
    four: 'Каре',
    fullHouse: 'Фулл хаус',
    triple: 'Тройка',
    pairs: 'Две пары',
    pair: 'Пара',
    best: 'Наивысшее очко'
};

exports.errors = {
    notArray: 'Invalid argument. Not an array.',
    invalidCount: 'Invalid argument. Invalid dices count.',
    invalidValues: 'Invalid argument. It must be array of integers in {1, 2, 3, 4, 5, 6}.'
};

exports.strength = [
    'best',
    'pair',
    'pairs',
    'triple',
    'fullHouse',
    'four',
    'poker'
];
