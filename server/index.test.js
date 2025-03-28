const request = require('supertest');
const app = require('./index');

describe('GET /romannumeral', () => {
  test('should return valid Roman numeral for 42', async () => {
    const res = await request(app).get('/romannumeral?query=42');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ input: "42", output: "XLII" });
  });

  test('should return error for missing query param', async () => {
    const res = await request(app).get('/romannumeral');
    expect(res.statusCode).toBe(400);
    expect(res.text).toMatch(/Enter a valid number/i);
  });

  test('should return error for out-of-range number', async () => {
    const res = await request(app).get('/romannumeral?query=5000');
    expect(res.statusCode).toBe(400);
  });

  test('should return error for non-numeric input', async () => {
    const res = await request(app).get('/romannumeral?query=abc');
    expect(res.statusCode).toBe(400);
  });
});
