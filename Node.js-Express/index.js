const express = require("express");
const bodyParser = require("body-parser")

const userRoute = require("./routes/userRoute")

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }))


userRoute(app);

app.get("/", (req, res) => {
    res.send("Olá mundo Express")
})

app.listen(port, (req, res) => {
    console.log("API rodando na porta 3000")
})