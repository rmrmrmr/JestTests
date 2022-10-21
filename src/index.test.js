const stringLength = (string) => {
  const { length } = string;
  if (length < 1) {
    return 'ERROR! String must be at least 1 char long';
  }
  if (length > 10) {
    return 'ERROR! String must be no longer than 10 chars long';
  }
  return `${string} is ${length} chars long`;
};

const reverseString = (string) => {
  const strArr = string.split('');
  const revArr = strArr.reverse();
  const revStr = revArr.join('');
  return revStr;
};

class Calculator {
  static add(numOne, numTwo) {
    const result = numOne + numTwo;
    return result;
  }

  static substract(numOne, numTwo) {
    const result = numOne - numTwo;
    return result;
  }

  static divide(numOne, numTwo) {
    const result = numOne / numTwo;
    return result;
  }

  static multiply(numOne, numTwo) {
    const result = numOne * numTwo;
    return result;
  }
}

describe('stringLength', () => {
  test('minLengthOfOne', () => {
    const result = stringLength('');
    expect(result).toBe('ERROR! String must be at least 1 char long');
  });
  test('maxLengthOfTen', () => {
    const result = stringLength('12345678910');
    expect(result).toBe('ERROR! String must be no longer than 10 chars long');
  });
  test('correctLength', () => {
    const result = stringLength('Ric');
    expect(result).toBe('Ric is 3 chars long');
  });
});

describe('reverseString', () => {
  test('reverseName', () => {
    const result = reverseString('Ricardo');
    expect(result).toBe('odraciR');
  });
  test('reverseCity', () => {
    const result = reverseString('Mexico City');
    expect(result).toBe('ytiC ocixeM');
  });
});

describe('calcAddition', () => {
  test('addTestOne', () => {
    const result = Calculator.add(1,1);
    expect(result).toBe(2);
  });
  test('addTestTwo', () => {
    const result = Calculator.add(10,10);
    expect(result).toBe(20);
  });
  test('addTestThree', () => {
    const result = Calculator.add(500, 250);
    expect(result).toBe(750);
  });
});

describe('calcSubstraction', () => {
  test('subTestOne', () => {
    const result = Calculator.substract(10, 5);
    expect(result).toBe(5);
  });
  test('subTestTwo', () => {
    const result = Calculator.substract(500, 500);
    expect(result).toBe(0);
  });
  test('subTestThree', () => {
    const result = Calculator.substract(500, 600);
    expect(result).toBe(-100);
  });
});

describe('calcDivision', () => {
  test('divTestOne', () => {
    const result = Calculator.divide(10, 5);
    expect(result).toBe(2);
  });
  test('divTestTwo', () => {
    const result = Calculator.divide(5, 10);
    expect(result).toBe(0.5);
  });
  test('divTestThree', () => {
    const result = Calculator.divide(2, 20);
    expect(result).toBe(0.1);
  });
});

describe('calcMultiplication', () => {
  test('multTestOne', () => {
    const result = Calculator.multiply(1,1);
    expect(result).toBe(1);
  });
  test('multTestTwo', () => {
    const result = Calculator.multiply(10,-1);
    expect(result).toBe(-10);
  });
  test('multTestThree', () => {
    const result = Calculator.multiply(10,0);
    expect(result).toBe(0);
  });
});
