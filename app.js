const express = require('express');
const app = express();

const intToRoman = (num) => {
  if (!num) {
    return new Error(
      `your query value is ${num}, please enter a positive integer value as a valid query value (e.g. 1, 5, 10)`
    );
  }
  if (typeof num !== 'number') {
    return new Error(
      `your query value (type: ${typeof num}) is invalid, please enter a positive integer value as a valid query value (e.g. 1, 5, 10)`
    );
  }
  if (num < 0) {
    return new Error(
      `your query value (value: ${num}) is negative, please enter a positive integer value as a valid query value`
    );
  }

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
    if (Math.floor(num / numeral) > 0) {
      for (let i = 0; i < Math.floor(num / numeral); i++) {
        intToRoman = intToRoman.concat(romanNumerals.get(numeral));
      }
      num %= numeral;
    }
  }
  return intToRoman;
};

app.get('/romannumeral', (req, res) => {
  try {
    const num = Number(req.query.query);
    if (!num) {
      const message = `your query value (value: ${req.query.query}) is invalid, please enter a positive integer value as a valid query value (e.g. 1, 5, 10)`;
      res.send(message);
      throw new Error(message);
    }
    if (num < 0) {
      const message = `your query value (value: ${req.query.query}) is negative, please enter a positive integer value as a valid query value`;
      res.send(message);
      throw new Error(message);
    }
    res.send(intToRoman(num));
    console.log('Successfully sent response');
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// console.log(intToRoman(-1));
