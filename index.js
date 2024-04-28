const express = require("express")
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()

app.use(bodyParser.json())


app.post("/json-body-to-file", (req, res) => {
    
    res.status(200).json({
        "message": "success"
    })
})

app.listen(3000, ()=> {
    console.log("App listening on 3000")
})