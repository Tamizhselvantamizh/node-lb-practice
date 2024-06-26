const express = require("express")
const bodyParser = require('body-parser')
const os = require('os');
const app = express()

app.use(bodyParser.json())

app.get("/", (req,res) => {
    res.status(200)
})
app.post("/json-body-to-file", (req, res) => {
    
    res.status(200).json({
        "message": "success",
        "os": os.hostname()
    })
})

app.listen(3000, ()=> {
    console.log("App listening on 3000")
})