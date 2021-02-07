const supertest = require('supertest');

const app = require('../src/app');

const request = supertest(app);

describe('GET /romannumeral', () => {
  test('should get roman numeral as string given positive integer as query value', async () => {
    const res = await request.get('/romannumeral').query({ query: '1' });
    expect(res.status).toBe(200);
    expect(res.text).toBe('I');
  });

  test('should get error given negative integer as query value', async () => {
    const res = await request.get('/romannumeral').query({ query: '-1' });
    expect(res.status).toBe(400);
    expect(res.text).toBe(
      `your query value (value: -1) is negative, please enter a positive integer value as a valid query value`
    );
  });

  test('should get error given invalid query type', async () => {
    const res = await request
      .get('/romannumeral')
      .query({ query: 'SOME_STRING' });
    expect(res.status).toBe(400);
    expect(res.text).toBe(
      `your query value (value: SOME_STRING) is invalid, please enter a positive integer value as a valid query value (e.g. 1, 5, 10)`
    );
  });
});
