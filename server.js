const express = require('express');

const app = express()

app.use('/', (req, res) => {
    res.json({
        "name": "Piyush",
        "age": 21,
        "email": "piyush@mailinator.com",
        "role": "SDE | Frontend"
    })
})

app.listen(8080, () => {
    console.log('Server listening on PORT 8080...')
})