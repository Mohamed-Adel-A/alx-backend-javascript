const request = require('supertest');
const server = require('./app');

describe('GET /', () => {
  it('responds with welcome message', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome to the payment system');
  });
});
