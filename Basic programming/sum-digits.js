var num = +gets();
var digits = num.toString().split('');
var realDigits = digits.map(Number)
print(realDigits[0] + realDigits[1] + realDigits[2] + realDigits[3]);

// variant 2
// let num = +gets();

// let digits = num.toString().split('').map(Number);

// print(digits[0] + digits[1] + digits[2] + digits[3]);
