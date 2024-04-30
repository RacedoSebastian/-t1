const mongoose = require("mongoose")
const dbConnect = ()=> {
    return mongoose.connect("mongodb://0.0.0.0:27017/usuarios_tp1")
    .then(() =>  console.log("conect"))
    .catch((error) => {
        console.log("error", error)
    })
}

module.exports = {dbConnect}
