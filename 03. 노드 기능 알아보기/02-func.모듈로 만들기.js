const { odd, even } = require('./02-var.모듈로 만들기');

function checkOddOrEven(num) {
    if (num % 2) { // 홀수면
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;