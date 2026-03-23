const request = require('supertest');
const app = require('../app');

describe('Smart Pantry API Test', () => {
   it('GET /items harus mengembalikan data sukses', async () => {
       const res = await request(app).get('/items');
       expect(res.statusCode).toBe(200);
       expect(res.body.status).toBe('success');
       expect(res.body.data[0].name).toBe('Susu UHT');
  });
});