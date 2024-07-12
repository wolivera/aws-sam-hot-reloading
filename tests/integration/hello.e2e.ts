import request from 'supertest';

describe('GET /users/me', () => {
    const server = request(process.env.SERVER_URL || 'http://localhost:3000');

    it('should say hello', async () => {
        const res = await server.get('/hello');
        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual({ message: 'Hello World!' });
    });
});
