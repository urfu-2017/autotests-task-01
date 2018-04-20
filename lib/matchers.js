'use strict';

module.exports = {
    poker: dices => hasElementWithCount(dices, 5),
    four: dices => hasElementWithCount(dices, 4),
    fullHouse: dices => hasElementWithCount(dices, 3) && hasElementWithCount(dices, 2),
    triple: dices => hasElementWithCount(dices, 3) && !hasElementWithCount(dices, 2),
    pairs: dices => hasRepeatsCount(dices, 2, 2),
    pair: dices => hasElementWithCount(dices, 2) && hasRepeatsCount(dices, 3, 1),
    best: dices => hasRepeatsCount(dices, 5, 1)
};

function countOf(array, element) {
    return array.filter(another => another === element).length;
}

function hasElementWithCount(array, count) {
    return array.some(element => countOf(array, element) === count);
}

function hasRepeatsCount(array, repeats, count) {
    const counts = array.map(element => countOf(array, element));

    return countOf(counts, count) === repeats * count;
}
