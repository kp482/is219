const addition = require('./addition');
const subtraction = require('./sub');
const multiply = require('./multiply');
const divide = require('./divide');
const square = require('./square');
const squareroot = require('./squareroot');

class MathOperations {
    static sum(a = null, b = null) {
        if(Array.isArray(a)) {
            return addition.sum(a);
        } else {
            return addition.sum(a,b);
        }
    }
    static product(a,b) {
        return multiply(a,b);
    }
    static quotient(a,b) {
        return divide(a,b);
    }
}

module.exports = MathOperations;