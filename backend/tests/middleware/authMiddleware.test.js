require('dotenv').config({ path: '.env.test' });

const express = require('express');
const request = require('supertest');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../../middleware/authMiddleware');

const app = express();
app.use(express.json());

app.get('/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Protected route', user: req.user });
});

describe('Auth Middleware', () => {
  it('should return 401 if no token is provided', async () => {
    const res = await request(app).get('/protected');
    expect(res.status).toBe(401);
    expect(res.body.message).toBe('No token provided');
  });

  it('should return 401 if token is invalid', async () => {
    const res = await request(app)
      .get('/protected')
      .set('Authorization', 'Bearer invalidtoken');
    expect(res.status).toBe(401);
    expect(res.body.message).toBe('Invalid token');
  });
});