'use strict';

module.exports = {
    poker: isPoker,
    four: isFour,
    fullHouse: isFullHouse,
    triple: isTriple,
    pairs: isPairs,
    pair: isPair,
    best: isBest
};

function count(array, element) {
    return array.filter(another => another === element).length;
}

function hasElementWithCount(array, count) {
    return Boolean(array.some(element => count(array, element) === count));
}

function isPoker(dices) {
    return hasElementWithCount(dices, 5);
}

function isFour(dices) {
    return hasElementWithCount(dices, 4);
}

function isFullHouse(dices) {
    return hasElementWithCount(dices, 3) && hasElementWithCount(dices, 2);
}

function isTriple(dices) {
    return hasElementWithCount(dices, 3) && !isFullHouse(dices);
}

function isPairs(dices) {
    return count(dices.map(dice => count(dices, dice)), 2) === 2;
}

function isPair(dices) {
    return hasElementWithCount(dices, 2) && !isPairs(dices);
}

function isBest(dices) {
    return dices.all(dice => count(dices, dice) === 1);
}
