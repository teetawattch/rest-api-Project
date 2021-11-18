const express = require('express')
const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    res.sendStatus(200)
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})