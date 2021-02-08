const express = require('express');

const app = express();

const { intToRoman } = require('./intToRoman');

app.get('/romannumeral', (req, res) => {
  try {
    const num = Number(req.query.query);
    if (!num) {
      const message = `your query value (value: ${req.query.query}) is invalid, please enter a positive integer value as a valid query value (e.g. 1, 5, 10)`;
      res.status(400).send(message);
      throw new Error(message);
    }
    if (num < 0) {
      const message = `your query value (value: ${req.query.query}) is negative, please enter a positive integer value as a valid query value`;
      res.status(400).send(message);
      throw new Error(message);
    }
    if (!Number.isInteger(num)) {
      const message = `your query value (value: ${req.query.query}) is not a positive integer, please enter a positive integer value as a valid query value (e.g. 1, 5, 10)`;
      res.status(400).send(message);
      throw new Error(message);
    }
    res.send(intToRoman(num));
    console.log('Request finished');
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
