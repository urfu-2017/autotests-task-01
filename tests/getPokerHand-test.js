const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [1, 1, 1, 1, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 2]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [2, 3, 3, 3, 2]', () => {
        const actual = getPokerHand([2, 3, 3, 3, 2]);

        assert.equal(actual, 'Фулл хаус');
    });


    it('should return `Тройка` for [4, 4, 4, 2, 3]', () => {
        const actual = getPokerHand([4, 4, 4, 2, 3]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [4, 4, 5, 5, 3]', () => {
       const actual = getPokerHand([4, 4, 5, 5, 3]);

    assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [4, 4, 5, 2, 6]', () => {
        const actual = getPokerHand([4, 4, 5, 2, 6]);

    assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [1, 6, 5, 4, 3]', () => {
        const actual = getPokerHand([1, 6, 5, 4, 3]);

    assert.equal(actual, 'Наивысшее очко');
    });
    // Напишите тесты на ваш замечательный код здесь
});

describe('Errors', () => {
    it('should throw error when сurrent value is not array for 2,3', () => {
        try {
            getPokerHand('2,3');
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Current value is not array');
        }
    });

    it('should throw error when current array lenght is not 5 for [1, 6, 5, 4, 3, 7]', () => {
        try {
            getPokerHand([1, 6, 5, 4, 3, 7]);
    throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Current array lenght is not 5');
    }
    });

    it('should throw error when current array lenght is not 5 for [1, 6, 5, 4]', () => {
        try {
            getPokerHand([1, 6, 5, 4]);
    throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Current array lenght is not 5');
    }
    });

    it('should throw error when some of the elements of the array not number for [1, h, 5, 4, 5]', () => {
        try {
            getPokerHand([1, 'h', 5, 4, 5]);
    throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Some of the elements of the array not number');
    }
    });

    it('should throw error when some of the elements of the array are less than 1 for [0, 8, 2, 4, 3]', () => {
        try {
            getPokerHand([-7, 8, -3, 4, 3]);
    throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Some of the elements of the array are less than 0');
    }
    });

    it('should throw error when some of the elements of the array are larger than 6 for [3, 7, 5, 4, 3]', () => {
        try {
            getPokerHand([3, 8, 5, 4, 3]);
    throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Some of the elements of the array are larger than 6');
    }
    });
    it('should throw error when some of the elements of the array not int for [3, 7, 5.6, 4, 3]', () => {
        try {
            getPokerHand([3, 1, 5.6, 4, 3]);
    throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Some of the elements of the array not int');
    }
    });
    it('should throw error when more than one argument passed for [3, 7, 2, 4, 3],[4,8]', () => {
        try {
            getPokerHand([3, 6, 2, 4, 3],[4,5]);
    throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'More than one argument passed');
    }
    });
});
