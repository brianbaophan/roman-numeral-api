const intToRoman = (num) => {
  if (num === 0) {
    throw new Error(
      `your query value is zero, please enter a positive integer value as a valid query value`
    );
  }
  if (!num) {
    throw new Error(
      `your query value is ${num}, please enter a positive integer value as a valid query value (e.g. 1, 5, 10)`
    );
  }
  if (typeof num !== 'number') {
    throw new Error(
      `your query value (type: ${typeof num}) is invalid, please enter a positive integer value as a valid query value (e.g. 1, 5, 10)`
    );
  }
  if (num < 0) {
    throw new Error(
      `your query value (value: ${num}) is negative, please enter a positive integer value as a valid query value`
    );
  }
  if (!Number.isInteger(num)) {
    throw new Error(
      `your query value (value: ${num}) is not a positive integer, please enter a positive integer value as a valid query value (e.g. 1, 5, 10)`
    );
  }

  // map of int to roman numerals (reference: https://www.tuomas.salste.net/doc/roman/numeri-romani-1-4000.html)
  const romanNumerals = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]);
  let intToRoman = '';

  for (let numeral of romanNumerals.keys()) {
    // if num value is divisible by current numeral in romanNumerals map
    if (Math.floor(num / numeral) > 0) {
      // concat count amount of current roman numeral in num value to intToRoman
      for (let i = 0; i < Math.floor(num / numeral); i++) {
        intToRoman = intToRoman.concat(romanNumerals.get(numeral));
      }

      // slice off most significant digit before checking next roman numeral
      num %= numeral;
    }
  }
  return intToRoman;
};

module.exports = {
  intToRoman,
};
