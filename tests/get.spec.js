const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

describe('get requests', () => {
    it('get course id', () => {
        request(app)
        .get('/course/1')
        .end((err, res) => {
            expect(res.body.id).to.be.equal('1');
        });
    });
});