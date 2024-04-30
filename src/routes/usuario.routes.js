const express = require("express")
const { createUsuario, obtenerUsuario, eliminarUsuario, actulizarUsuario } = require("../controllers/usuario.controller")
const route = express.Router()

route.post("/usuario", createUsuario)
route.get("/usuario", obtenerUsuario)
route.delete("/:id", eliminarUsuario)
route.put("/:id", actulizarUsuario)





module.exports = {route}