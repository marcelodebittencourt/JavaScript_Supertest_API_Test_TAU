const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

const app = express(); 

app.get('/first', (err, res) => {
    res.status(200).json({"ok": "response"});
});

describe('First test', () => {
    it('OK response', () => {
        request(app)
        .get('/first')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
        });
    });

    it('Mocky OK Response', (done) => {
        request('https://run.mocky.io')
        .get('/v3/8807d061-404f-4917-8aeb-b1898ddb414a')
        .expect(200, done);
    });
});