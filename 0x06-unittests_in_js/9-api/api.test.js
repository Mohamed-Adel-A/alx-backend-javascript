const request = require('supertest');
const server = require('./api');

describe('GET /cart/:id', () => {
  it('responds with payment methods for valid cart ID', async () => {
    const response = await request(server).get('/cart/123');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Payment methods for cart 123');
  });

  it('responds with error message for invalid cart ID', async () => {
    const response = await request(server).get('/cart/abc');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Invalid cart ID');
  });
});
