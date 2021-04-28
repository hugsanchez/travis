const { expect } = require('chai');
const { syncAndSeed } = require('../db');

const app = require('supertest')(require('../app'))

beforeEach(() => syncAndSeed());

describe('Testing', () => {
    it('equals 2', ()=>{
        expect(1 + 1).to.equal(2)
    })
});

describe('Routes', () => {
    describe('GET /', ()=>{
        it('show info', async() =>{
            const response = await app.get("/");
            expect(response.status).to.equal(200);
            expect(response.text).to.include('The Acme API');
        })
    })
    describe('GET /api/movies', () => {
        it('return movies', async() => {
            const response = await app.get('/api/movies');
            expect(response.status).to.equal(200);
        })
    })
})
