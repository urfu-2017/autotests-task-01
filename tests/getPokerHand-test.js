'use strict';

const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
	describe('Positive', () =>{
	    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
	        const actual = getPokerHand([1, 1, 1, 1, 1]);

	        assert.equal(actual, 'Покер');
	    });

	    it('should return `Каре` for [1, 1, 1, 1, 2]', () =>{
	    	const actual = getPokerHand([1, 1, 1, 1, 2]);

	    	assert.equal(actual, 'Каре');
	    });

	    it('should return `Фулл Хаус` for [1, 1, 1, 3, 3]', () =>{
	    	const actual = getPokerHand([1, 1, 1, 3, 3]);

	    	assert.equal(actual, `Фулл Хаус`);
	    });

	    it('should return `Тройка` for [1, 1, 1, 4, 3]', () =>{
	    	const actual = getPokerHand([1, 1, 1, 4, 3]);

	    	assert.equal(actual, `Тройка`);
	    });

	    it('should return `Две пары` for [1, 2, 2, 4, 4]', () =>{
	    	const actual = getPokerHand([1, 2, 2, 4, 4]);

	    	assert.equal(actual, `Две пары`);
	    });

		it('should return `Пара` for [1, 2, 2, 3, 4]', () =>{
	    	const actual = getPokerHand([1, 2, 2, 3, 4]);

	    	assert.equal(actual, `Пара`);
	    });

	    it('should retrn `Наивысшее очко` for [1, 3, 4, 5, 2]',() => {
            const actual = getPokerHand([1, 3, 4, 5, 2]);

            assert.equal(actual, 'Наивысшее очко');
        });
	});

	describe('Not Positive', () =>{

		it('should return `Empty input` for empty input', () => {
			const actual = () => getPokerHand();

			assert.equal(actual, `Empty input`);
		}); //nothing input

		it('should return `Empty array` for []', () => {
	        const actual = () => getPokerHand([]);

	        assert.equal(actual, `Empty array`);
	    }); // on input empty array

	    it('should return `In array should be more than 5 elements` for [1,2,3,4,5,6]', () => {
	        const actual = () => getPokerHand([1,2,3,4,5,6]);

	        assert.equal(actual, `In array should be more than 5 elements`);
	    }); // more than 5 elements

	    it('should return `In array should be more than 5 elements` for [1,2,3,4,5,6]', () => {
	        const actual = () => getPokerHand([1,2,3,4]);

	        assert.equal(actual, `In array should be less than 5 elements`);
	    }); // less than 5 elements

		it('should return `It is not array for NaN`', () => {
	        const actual = () => getPokerHand(NaN);

	        assert.equal(actual, `It is not array for NaN`);
	    }); // input not array
		
	    it('should return `Cell of array less 1 for [0,2,3,4,5]`', () => {
	    	const actual = () => getPokerHand([0,2,3,4,5]);

	    	assert.equal(actual, `Cell of array less 1 for [0,2,3,4,5]`);
	    });

		it('should return `Cell of array less 6` for [1,7,3,4,5]', () => {
	    	const actual = () => getPokerHand([1,7,3,4,5]);

	    	assert.equal(actual, `Cell of array less 6`);
	    });	     

		it('should return `Cell of array is fraction for [0.8, 2, 3, 4, 5]`', () =>{
			const actual = () => getPokerHand([0.8, 2, 3, 4, 5]);

			assert.equal(actual, `Cell of array is fraction for [0.8, 2, 3, 4, 5]`);
		});  
	});
    // Напишите тесты на ваш замечательный код здесь
});
