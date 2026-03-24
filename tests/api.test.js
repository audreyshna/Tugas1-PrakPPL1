const request = require('supertest');
const app = require('../app');
const e = require('express');

describe('Smart Pantry API Test', () => {
    // Test Create
    it('POST /items harus bisa menambah barang baru', async () => {
        const res = await request(app).post('/items').send({
            name: 'Telur Omega',
            expiry_date: '2026-05-20',
            status: 'Fresh'
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.id).toBe(4);
    });

    // Test Read
    it('GET /items harus mengembalikan daftar barang', async () => {
        const res = await request(app).get('/items');
        expect(res.statusCode).toBe(200);
        expect(res.body[0].id).toBe(1);
    });

    // Test Update
    it('PUT /items/2 harus bisa mengubah data barang', async () => {
        const res = await request(app).put('/items/2').send({
            name: 'Susu UHT',
            expiry_date: '2026-04-01',
            status: 'Fresh'
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe('Susu UHT');
    });

    // Test Delete
    it('DELETE /items/4 harus bisa menghapus barang', async () => {
        const res = await request(app).delete('/items/4');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Barang berhasil dihapus');
    });
});