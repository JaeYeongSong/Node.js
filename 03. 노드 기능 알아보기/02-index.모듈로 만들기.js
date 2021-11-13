const {
    odd,
    even
} = require('./02-var.모듈로 만들기');
const checkNumber = require('./02-func.모듈로 만들기');

function checkStringOddOrEven(str) {
    if (str.length % 2) { // 홀수면
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));