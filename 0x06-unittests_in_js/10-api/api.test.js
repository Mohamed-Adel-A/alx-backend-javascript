const request = require('supertest');
const server = require('./api');

describe('GET /available_payments', () => {
  it('responds with payment methods', async () => {
    const response = await request(server).get('/available_payments');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});

describe('POST /login', () => {
  it('responds with welcome message', async () => {
    const response = await request(server)
      .post('/login')
      .send({ userName: 'John' });
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome John');
  });
});
