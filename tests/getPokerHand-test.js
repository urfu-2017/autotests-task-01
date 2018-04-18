const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');

describe('getPokerHand', () => {
	var tests = [
    {args: [1, 1, 1, 1, 1],       expected: `Покер`},
    {args: [1, 1, 1, 1, 2],       expected: `Каре`},
    {args: [1, 1, 1, 2, 2],       expected: `Фулл хаус`},
    {args: [1, 1, 1, 2, 3],       expected: `Тройка`},
    {args: [1, 1, 2, 2, 3],       expected: `Две пары`},
    {args: [1, 1, 2, 4, 3],       expected: `Пара`},
    {args: [1, 5, 2, 3, 4],       expected: `Наивысшее очко`}
  ];
  
    tests.forEach(function(test) {
        it('should return ' + test.expected + ' for ' + test.args.join(','), function() {
          var res = getPokerHand(test.args);
          assert.equal(res, test.expected);
        });
    });
	
	it('should throw for more than 5 cards', function() {
	    var res = () => getPokerHand([1, 2, 3, 4, 5, 6]);
	    assert.throws(res, Error);
    });
	it('should not throw on points greater than 5', function() {
	    var res = () => getPokerHand([6, 6, 6, 6 ,6]);
	    assert.doesNotThrow(res, Error);
    });
	
	it('should throw on negative points', function() {
	    var res = () => getPokerHand([-1, -1, -1, -1 ,-1]);
	    assert.throws(res, Error);
    });
	
	it('should throw on incorrect input', function() {
	    var res = () => getPokerHand('a');
	    assert.throws(res, Error);
    });

    // Напишите тесты на ваш замечательный код здесь
});
