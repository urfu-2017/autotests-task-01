'use strict';

const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
	describe('Positive', () =>{
	    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
	        const actual = getPokerHand([1, 1, 1, 1, 1]);

	        assert.equal(actual, 'Покер');
	    });
	    
	    it('should return `Фулл Хаус` for [1, 1, 1, 3, 3]', () =>{
	    	const actual = getPokerHand([1, 1, 1, 3, 3]);

	    	assert.equal(actual, `Фулл Хаус`);
	    });

	    it('should return `Пара` for [1, 2, 2, 3, 4]', () =>{
	    	const actual = getPokerHand([1, 2, 2, 3, 4]);

	    	assert.equal(actual, `Пара`);
	    });

	    it('should return `Пара` for [1, 2, 3, 4, 4]', () =>{
	    	const actual = getPokerHand([1, 2, 3, 4, 4]);

	    	assert.equal(actual, `Пара`);
	    });

	    it('should return `Пара` for [1, 1, 2, 3, 4]', () =>{
	    	const actual = getPokerHand([1, 1, 2, 3, 4]);

	    	assert.equal(actual, `Пара`);
	    });

	    it('should return `Пара` for [1, 2, 2, 3, 4]', () =>{
	    	const actual = getPokerHand([1, 2, 2, 3, 4]);

	    	assert.equal(actual, `Пара`);
	    });

	    it('should return `Тройка` for [1, 1, 1, 4, 3]', () =>{
	    	const actual = getPokerHand([1, 1, 1, 4, 3]);

	    	assert.equal(actual, `Пара`);
	    });

	    it('should return `Две пары` for [1, 2, 2, 4, 4]', () =>{
	    	const actual = getPokerHand([1, 2, 2, 4, 4]);

	    	assert.equal(actual, `Две пары`);
	    });

	    it('should retrn `Наивысшее очко` for [1, 3, 4, 5, 2]',() => {
            const actual = getPokerHand([1, 3, 4, 5, 2]);

            assert.equal(actual, 'Наивысшее очко');
        });
	});

	describe('Not Positive', () =>{
		it('should return `It is not array` for []', () => {
	        const actual = () => getPokerHand([]);

	        assert.equal(actual, /Its not array/);
	    });

	    it('should return `It is not array` for [1]', () => {
	        const actual = () => getPokerHand([]);

	        assert.equal(actual, /Need five elements/);
	    });

	    it('should return `It is not array` for [1]', () => {
	        const actual = () => getPokerHand(NaN);

	        assert.equal(actual, /Its not array/);
	    });

	    it('should return `It is not array` for [1,2,3,4,5,6]', () => {
	        const actual = () => getPokerHand(NaN);

	        assert.equal(actual, /In array should be 5 elements/);
	    });
	});
    // Напишите тесты на ваш замечательный код здесь
});
