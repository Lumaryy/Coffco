import { Router } from "express";
import { actualizarUsuario, eliminarUsuario, listarUsuario, listarUsuarioId, registrarUsuario,ConsultaUsers } from "../controllers/usuarioController.js";
import { validacionUser } from "../../validation/UsuariosValidator.js";
import { validarToken} from "../controllers/AutentificacionLogin.js";
const rutaUsuario= Router()

rutaUsuario.get('/listar', listarUsuario)
rutaUsuario.get('/listarid/:id_usuario', listarUsuarioId)
rutaUsuario.post('/registrar',validacionUser,registrarUsuario)
rutaUsuario.delete('/eliminar/:id_usuario',  eliminarUsuario)
rutaUsuario.put('/actualizar/:id',validacionUser,actualizarUsuario)
rutaUsuario.get('/consulta/',ConsultaUsers)



export default rutaUsuario  