import { Router } from "express";
import { eliminarInteres, listarInteresesPagadosCliente, listarInteresesPendientes, listarTotalInteresesMesAño, obtenerInteres,  registrarInteres } from "../Controller/victorInteresController.js";



const victorInteres = Router()

victorInteres.get('/obtener', obtenerInteres)
victorInteres.post('/registrar/interes', registrarInteres)
victorInteres.delete('/eliminar/:idInteres', eliminarInteres)
victorInteres.get('/pagados/cliente/:clienteId', listarInteresesPagadosCliente)
victorInteres.get('/total/:mes/:año', listarTotalInteresesMesAño)
victorInteres.get('/pendientes', listarInteresesPendientes)

export default victorInteres