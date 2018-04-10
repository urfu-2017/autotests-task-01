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

    // Напишите тесты на ваш замечательный код здесь
});
