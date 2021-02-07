const express = require('express');
const app = express();

const intToRoman = (num) => {
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
  res.send(intToRoman(req.query.query));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
