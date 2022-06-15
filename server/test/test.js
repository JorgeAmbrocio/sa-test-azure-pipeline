const chai = require('chai');
const chaiHttp = require('chai-http');
const {app} = require('../index');
chai.use(chaiHttp)

describe('Pruebas generales', () => {
    describe('Prueba suma', () => {
        it('Debe sumar dos números', (done) => {
            chai.request(app)
                .get('/suma/1/2')
                .end((_err, res) => {
                    chai.assert.equal(res.status,200)
                    chai.assert.equal(res.body.resultado, 3)
                    done()
                })
        })
        it('Suma falla y devuelve un error', (done) => {
            chai.request(app)
                .get('/suma/1/a')
                .end((_err, res) => {
                    chai.assert.equal(res.status,400)
                    done()
                })
        })
    })
    describe('Prueba multiplicación', () => {
        it('Debe multiplicar dos números', (done) => {
            chai.request(app)
                .get('/multiplica/1/2')
                .end((_err, res) => {
                    chai.assert.equal(res.status,200)
                    chai.assert.equal(res.body.resultado, 2)
                    done()
                })
        })
        it('Multiplicación falla y devuelve un error', (done) => {
            chai.request(app)
                .get('/multiplica/1/a')
                .end((_err, res) => {
                    chai.assert.equal(res.status,400)
                    done()
                })
        })
    })
})