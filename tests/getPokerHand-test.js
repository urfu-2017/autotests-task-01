const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');
describe('getPokerHand', () => {
    describe('positive', () => {
            it('should return `Наивысшее очко` for [6,2,3,4,5]', () => {
                    const actual = getPokerHand([6, 2, 3, 4, 5]);  
                    assert.equal(actual, 'Наивысшее очко');
            });

            it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
                    const actual = getPokerHand([1, 1, 1, 1, 1]);           
                    assert.equal(actual, 'Покер');
            });
            it('should return `Каре` for [6, 2, 2, 2, 2]', () => {
                const actual = getPokerHand([6, 2, 6, 6, 6]);
        
                assert.equal(actual, 'Каре');
            });
            it('should return `Фулл хаус` for [5, 5, 5, 3, 3]', () => {
                const actual = getPokerHand([5, 3, 5, 5, 3]);
        
                assert.equal(actual, 'Фулл хаус');
            });
            it('should return `Тройка` for [1, 4, 6, 6, 6]', () => {
                const actual = getPokerHand([6, 4, 6, 1, 6]);
        
                assert.equal(actual, 'Тройка');
            });
            it('should return `Две пары` for [1, 1, 3, 3, 5]', () => {
                const actual = getPokerHand([1, 1, 3, 4, 3]);
        
                assert.equal(actual, 'Две пары');
            });
            it('should return `Пара` for [3, 3, 1, 6, 4]', () => {
                const actual = getPokerHand([3, 3, 1, 6, 4]);
        
                assert.equal(actual, 'Пара');
            });   
    });
    describe('Negative', () => {
        describe('dice more than 6', () => {
            it('should return `The dice must be no more than 6 and not less than 1 and be an integer`', () => {
                assert.throws(() => getPokerHand([3, 9, 1, 6, 4]), /The dice must be no more than 6 and not less than 1/);
            }); 
            it('should return `The dice must be no more than 6 and not less than 1 and be an integer`', () => {
                assert.throws(() => getPokerHand([3, 3, 1, 12, 4]), /The dice must be no more than 6 and not less than 1/);
            }); 
        });

        describe('dice less than 1', () => {
            it('should return `The dice must be no more than 6 and not less than 1 and be an integer`', () => {
                assert.throws(() => getPokerHand([3, 2, 3, 0, 5]), /The dice must be no more than 6 and not less than 1/);
            }); 
            it('should return `The dice must be no more than 6 and not less than 1 and be an integer`', () => {
                assert.throws(() => getPokerHand([3, 2, 3, -10, 5]), /The dice must be no more than 6 and not less than 1/);
            }); 
        });

        describe('values is not integer', () => {
            it('should return `Value no integer`', () => {
                assert.throws(() => getPokerHand([3, 2, 3, '0', 5]), /Value no integer/);
            }); 
            it('should return `Value no integer`', () => {
                assert.throws(() => getPokerHand([3, 2, 3, null, 5]), /Value no integer/);
            }); 
            it('should return `Value no integer`', () => {
                assert.throws(() => getPokerHand([3, 2, 3, 4.1, 5]), /Value no integer/);
            }); 
            it('should return `Value no integer`', () => {
                assert.throws(() => getPokerHand([3, 2, 3, undefined, 5]), /Value no integer/);
            }); 
            it('should return `Value no integer`', () => {
                assert.throws(() => getPokerHand([3, 2, 3, NaN, 5]), /Value no integer/);
            }); 
            it('should return `Value no integer`', () => {
                assert.throws(() => getPokerHand([3, 2, 3, [1,0], 5]), /Value no integer/);
            }); 
            it('should return `Value no integer`', () => {                 
                assert.throws(() => getPokerHand([3, 2, 3, {'var': 'let'}, 5]), /Value no integer/);
                });
        });

        describe('no five dice', () => {
            it('should return `no five dice`', () => {
                assert.throws(() => getPokerHand([]), /no five dice/);
            }); 
            it('should return `no five dice`', () => {
                assert.throws(() => getPokerHand([2,3,4]), /no five dice/);
            }); 
            it('should return `no five dice`', () => {
                assert.throws(() => getPokerHand([3, 2, 3, 4, 1, 5]), /no five dice/);
            }); 
        });
    });

    describe('value is not array', () => {
        it('should return `please pass an array`', () => {
            assert.throws(() => getPokerHand(), /please pass an array/);
        }); 
        it('should return `please pass an array`', () => {
            assert.throws(() => getPokerHand( null), /please pass an array/);
        }); 
        it('should return `please pass an array`', () => {
            assert.throws(() => getPokerHand(undefined), /please pass an array/);
        }); 
        it('should return `please pass an array`', () => {
            assert.throws(() => getPokerHand(NaN), /please pass an array/);
        }); 
        it('should return `please pass an array`', () => {
            assert.throws(() => getPokerHand(2), /please pass an array/);
        }); 
        it('should return `please pass an array`', () => {
            assert.throws(() => getPokerHand(2.1), /please pass an array/);
        }); 
        it('should return `please pass an array`', () => {
            assert.throws(() => getPokerHand('2'), /please pass an array/);
        }); 
        it('should return `please pass an array`', () => {                 
        assert.throws(() => getPokerHand({'asd': 'asd'}), /please pass an array/);
        });
    });

    
    // Напишите тесты на ваш замечательный код здесь
});
