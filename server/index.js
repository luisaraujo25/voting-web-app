const express = require('express')
const app = express()

const PORT = 8000

app.listen(PORT, function (){
    console.log(`Server started running on http://localhost:${PORT}`)
})