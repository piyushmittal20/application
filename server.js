const express = require('express');

const app = express()

app.use('/v1', (req, res) => {
    res.json({
        "name": "Piyush",
        "age": 21,
        "email": "piyush@mail.com"
    })
})

app.listen(5000, () => {
    console.log('Server listening on PORT 5000...')
})