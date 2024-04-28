import { Router } from "express";
import { actualizarAlquiler, registroAlquiler } from "../Controller/victorAlquilerController.js";


const victorAlquiler = Router()

victorAlquiler.post('/registrar/alquiler', registroAlquiler)
victorAlquiler.put('/actualizar/:idAlquiler', actualizarAlquiler)

export default victorAlquiler