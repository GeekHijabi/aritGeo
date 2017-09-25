const assert = require('chai').assert;
const app = require('../src/aritgeo.js');


describe('aritGeo', function() {

    describe('Input empty value', () => {
        it('should  return 0 for []', function() {
            assert.equal(app.aritGeo([]), 0);
        });

    });


    describe('Handle Arithmetic  input', function() {
        it('should  return Arithmetic for [1,2,3,4,5]', function() {
            assert.equal(app.aritGeo([1, 2, 3, 4, 5]), 'Arithmetic');
        });

        it('should  return Arithmetic for [5,10,15,20,25]', function() {
            assert.equal(app.aritGeo([5, 10, 15, 20, 25]), 'Arithmetic');
        });

        it('should  return Arithmetic for [20,17,14,11,8,5,3,0]', function() {
            assert.equal(app.aritGeo([19, 17, 15, 13, 11, 9]), 'Arithmetic');
        });


    });

    describe('Handle Geometric  input', function() {

        it('should  return Geometric for [200,100,50]', function() {
            assert.equal(app.aritGeo([200, 100, 50]), 'Geometric');
        });

        it('should  return Geometric for [3, 9, 27, 81]', function() {
            assert.equal(app.aritGeo([3, 9, 27, 81]), 'Geometric');
        });

        it('should  return Geometric for [1,0.5,0.25,0.125]', function() {
            assert.equal(app.aritGeo([1, 0.5, 0.25, 0.125]), 'Geometric');
        });
    });

    describe('Handle Non geometric or arithmetic  input', function() {
        it('should  return -1 for [1,3,3,54,9]', function() {
            assert.equal(app.aritGeo([1, 3, 3, 54, 9]), -1);
        });

        it('should  return -1 for [1,1,1,4,9]', function() {
            assert.equal(app.aritGeo([1, 1, 1, 4, 9]), -1);
        });

        it('should  return -1 for ["a",4, 9]', function() {
            assert.equal(app.aritGeo(['a', 4, 9]), -1);
        });


        it('should  return -1 for ["",1,4,9]', function() {
            assert.equal(app.aritGeo(['', 1, 4, 9]), -1);
        });


    });
})