const express = require("express")
const {dbConnect} = require("./config");
const { route } = require("./src/routes/usuario.routes");
const bodyparser = require("body-parser")
const app = express()
app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}));

dbConnect();
app.use("/api", route)


app.listen(3001,()=>{
    console.log("estoy en el puerto 3001")
})

