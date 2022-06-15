const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// enpoint que suma dos dígitos recibidos por parámetros en ruta
app.use('/suma/:numeroa/:numerob', (req, res) => {
    let resultado = 0

    const numeroa = parseInt(req.params.numeroa)
    const numerob = parseInt(req.params.numerob)

    if ( isNaN(numeroa) || isNaN(numerob) ){
        res.status(400).send({'resultado': 'joven, no puedes sumar esto'})
    }else {
        resultado = numeroa + numerob
        res.status(200).json({'resultado': resultado})
    }
})

// enpoint que multiplica dos dígitos recibidos por parámetros en ruta
app.use('/multiplica/:numeroa/:numerob', (req, res) => {
    let resultado = 0
    const numeroa = parseInt(req.params.numeroa)
    const numerob = parseInt(req.params.numerob)

    if ( isNaN(numeroa) || isNaN(numerob) ){
        res.status(400).send({'resultado': 'joven, no puedes multiplicar esto'})
    }else {
        resultado = numeroa * numerob
        res.status(200).json({'resultado': resultado})
    }
})

// endpoint para probar la funcionalidad del servidor
app.use('/', (_req, res) => {
    res.status(200).json({'msj':'servidor funcionando'})
})

app.listen(
    3210,
    () => {
        console.log('Servidor ejecutándose en el puerto san josé, 3210')
    }
)

exports.app = app