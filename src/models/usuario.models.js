const mongoose = require("mongoose")

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    apellido:{
        type : String,
        trim: true,
        required : true
    },
    edad:{
        type: Number,
        trim: true,
        required: true
    }

})

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario