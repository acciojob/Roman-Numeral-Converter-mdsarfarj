function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = '';

  for (let i = 0; i < 7; i += 2) {
    const [symbol1, value1] = obj[i];
    const [symbol2, value2] = obj[i - 1];
    const [symbol3, value3] = obj[i - 2];

    const quotient = Math.floor(num / value1);
    num %= value1;

    if (quotient === 9) {
      result += symbol3 + symbol1;
    } else if (quotient >= 5) {
      result += symbol2;
      for (let j = 0; j < quotient - 5; j++) {
        result += symbol1;
      }
    } else if (quotient === 4) {
      result += symbol3 + symbol2;
    } else {
      for (let j = 0; j < quotient; j++) {
        result += symbol1;
      }
    }
  }

  return result;
}

// Testing the function with input 36
console.log(convertToRoman(36));

// Export the function for testing in other files
module.exports = convertToRoman;
