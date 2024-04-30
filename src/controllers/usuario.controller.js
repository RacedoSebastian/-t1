const mongoose = require("mongoose");
const Usuario = require("../models/usuario.models");

const createUsuario = (req, res) => {
    const data = req.body
    console.log(data)
    try {
        const newUsuario = Usuario.create(data)
        res.send("usuario creado")
    } catch (error) {
        console.log(error)
    }
}

const obtenerUsuario = async (req, res) => {
    try {
        const Usuarios = await Usuario.find()
        res.json({ usuario: Usuarios })
    } catch (error) {
        console.log(error)
    }
}

const eliminarUsuario = async (req, res) => {
    try {
        const id = req.params.id
        await Usuario.deleteOne({_id: id})
        res.send("usuario eliminado")
    } catch (error) {
        console.log(error)
    }

}

const actulizarUsuario = async (req, res) => {
    const id = req.params.id
    await Usuario.updateOne({_id: id}, req.body)
    try {
        res.send("usuario actulalizado")
    } catch (error) {
        console.log(error)
    }
}


module.exports = { createUsuario, obtenerUsuario, eliminarUsuario, actulizarUsuario }