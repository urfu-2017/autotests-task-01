const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Покер` for [6, 6, 6, 6, 6]', () => {
        const actual = getPokerHand([6, 6, 6, 6, 6]);

        assert.equal(actual, 'Покер');
    });


    it('should return `Каре` for [1, 1, 1, 1, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 2]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Каре` for [2, 2, 6, 2, 2]', () => {
        const actual = getPokerHand([2, 2, 6, 2, 2]);

        assert.equal(actual, 'Каре');
    });


    it('should return `Фулл хаус` for [1, 1, 1, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 2]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Фулл хаус` for [1, 6, 1, 6, 1]', () => {
        const actual = getPokerHand([1, 6, 1, 6, 1]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [1, 1, 1, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 3]);

        assert.equal(actual, 'Тройка');
    });
	
    it('should return `Тройка` for [6, 1, 6, 5, 6]', () => {
        const actual = getPokerHand([6, 1, 6, 5, 6]);

        assert.equal(actual, 'Тройка');
    });

	it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 2, 2, 3]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Две пары` for [6, 2, 5, 2, 6]', () => {
        const actual = getPokerHand([6, 2, 5, 2, 6]);

        assert.equal(actual, 'Две пары');
    });
   
    it('should return `Пара` for [1, 1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 1, 2, 3, 4]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Пара` for [1, 6, 2, 3, 6]', () => {
        const actual = getPokerHand([1, 6, 2, 3, 6]);

        assert.equal(actual, 'Пара');
    });
	
	it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5]);

        assert.equal(actual, 'Наивысшее очко');
    });


    it('should return `Наивысшее очко` for [6, 2, 4, 3, 5]', () => {
        const actual = getPokerHand([6, 2, 4, 3, 5]);

        assert.equal(actual, 'Наивысшее очко');
    });


	it('should throw error when there is an invalid value', () => {
		 const actual = () => getPokerHand([1, 2, 4, 5, 10]);

		 assert.throws(actual, /Значения не должны быть меньше 1 и больше 6/);
	});	


    it('should throw error when there is an invalid value', () => {
         const actual = () => getPokerHand([1, 2, 0, 5, 4]);

         assert.throws(actual, /Значения не должны быть меньше 1 и больше 6/);
    }); 

    
    it('should throw error when there is an invalid value', () => {
         const actual = () => getPokerHand([1, 2, 3,-1, 4]);

         assert.throws(actual, /Значения не должны быть меньше 1 и больше 6/);
    }); 

    it('should throw error when there is an invalid value', () => {
         const actual = () => getPokerHand([1, 2, 3,-1.3, 4]);

         assert.throws(actual, /Значения не должны быть меньше 1 и больше 6/);
    }); 

    it('should throw error when there is less then 5 dice', () => {
         const actual = () => getPokerHand([1]);

         assert.throws(actual, /Введите значения 5 кубиков/);
    });

    it('should throw error when there is less then 5 dice', () => {
         const actual = () => getPokerHand([10]);

         assert.throws(actual, /Введите значения 5 кубиков/);
    });

    it('should throw error when there is an invalid value', () => {
         const actual = () => getPokerHand([10, 10, 10, 10, 10]);

         assert.throws(actual, /Значения не должны быть меньше 1 и больше 6/);
    }); 

	it('should throw error when there is less then 5 dice', () => {
		 const actual = () => getPokerHand([1, 2, 4, 5]);

		 assert.throws(actual, /Введите значения 5 кубиков/);
	});

	
	it('should throw error when there is more then 5 dice', () => {
		 const actual = () => getPokerHand([1, 2, 4, 5, 6, 6]);

		 assert.throws(actual, /Введите значения 5 кубиков/);
	});    

    it('should throw error when there is wrong dices', () => {
		 const actual = () => getPokerHand([1, 2, 4, 5, 'word']);

		 assert.throws(actual, /Значения должны быть целыми числами/);
	});

    it('should throw error when there is wrong dices', () => {
         const actual = () => getPokerHand([1, 2, 4, 5, 3.5]);

         assert.throws(actual, /Значения должны быть целыми числами/);
    });

    it('should throw error when there not array', () => {
         const actual = () => getPokerHand(5);

         assert.throws(actual, /Введите массив/);
    });
    
    it('should throw error when there not array', () => {
         const actual = () => getPokerHand(NaN);

         assert.throws(actual, /Введите массив/);
    });

    it('should throw error when there not array', () => {
         const actual = () => getPokerHand("[6, 2, 4, 5, 3]");

         assert.throws(actual, /Введите массив/);
    });

    it('should throw error when there not array', () => {
         const actual = () => getPokerHand("");

         assert.throws(actual, /Введите массив/);
    });

    it('should throw error when there not array', () => {
         const actual = () => getPokerHand("word");

         assert.throws(actual, /Введите массив/);
    });


});

