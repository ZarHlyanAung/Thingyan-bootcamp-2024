function calculator(num1, num2, sign) {
  if (sign === '+') {
    return num1 + num2;
  } else if (sign === '-') {
    return num1 - num2;
  } else if (sign === '*') {
    return num1 * num2;
  } else if (sign === '/') {
    return num1 / num2;
  } else {
    return 'Invalid operator';
  }
}

module.exports = calculator;
