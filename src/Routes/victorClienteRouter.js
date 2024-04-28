import { Router } from 'express'
import { actualizarClientes, eliminarClientes, listarClientes, registarClientes } from '../Controller/victorClienteController.js'
import { validarCampos } from '../Controller/victorValidarUsuarios.js'



const victorClienteRouter = Router()

victorClienteRouter.get('/clientes', listarClientes )
victorClienteRouter.post('/clientes/registrar',validarCampos, registarClientes)
                                //   👆
victorClienteRouter.delete('/clientes/:id', eliminarClientes)
victorClienteRouter.put('/clientes/:id', actualizarClientes)

export default victorClienteRouter