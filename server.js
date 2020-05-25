const express = require('express')
const app = express()

const port = process.env.E40_PORT || 80 
console.log(port)

app.get('/', (req, res, next) => {
    res.sendStatus(200)
})

app.listen(port, e => {
    if(e)
        throw new Error('Server Boot Failure: ' + e.message())
    else
        console.log('Successfully Booted. Listening on port ' + port)
})
