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


    it('should return `Фулл хаус` for [1, 1, 1, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 2]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [1, 1, 1, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 3]);

        assert.equal(actual, 'Тройка');
    });
	
	it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 2, 2, 3]);

        assert.equal(actual, 'Две пары');
    });
   
    it('should return `Пара` for [1, 1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 1, 2, 3, 4]);

        assert.equal(actual, 'Пара');
    });
	
	it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5]);

        assert.equal(actual, 'Наивысшее очко');
    });


	it('should throw error when there is an invalid value', () => {
		 const actual = () => getPokerHand([1, 2, 4, 5, 10]);

		 assert.throws(actual, /Значения не должны быть меньше 1 и больше 6/);
	});	


	it('should throw error when there is less then 5 dice', () => {
		 const actual = () => getPokerHand([1, 2, 4, 5]);

		 assert.throws(actual, /Введите значения 6 кубиков/);
	});

	
	it('should throw error when there is more then 5 dice', () => {
		 const actual = () => getPokerHand([1, 2, 4, 5, 6, 6]);

		 assert.throws(actual, /Введите значения 6 кубиков/);
	});    

    it('should throw error when there is wrong dices', () => {
		 const actual = () => getPokerHand([1, 2, 4, 5, 'word']);

		 assert.throws(actual, /Значения должны быть числами/);
	});

	

    // Напишите тесты на ваш замечательный код здесь
});
