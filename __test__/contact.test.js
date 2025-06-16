const request = require('supertest');
const express = require('express');
const contactRoutes = require('../routes/contact');

const app = express();
app.use(express.json());
app.use('/api/contact', contactRoutes);

describe('POST /api/contact', () => {
  it('should return 200 for valid submission', async () => {
    const res = await request(app).post('/api/contact').send({
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'This is a test message.',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it('should return 400 for validation errors', async () => {
    const res = await request(app).post('/api/contact').send({
      name: '',
      email: 'invalid-email',
      subject: '',
      message: 'short',
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.errors).toBeDefined();
  });
});