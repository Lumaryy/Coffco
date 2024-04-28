import { Router } from "express";
import { desactivarArticulo, registrarArticulos } from "../Controller/victorArticulosController.js";



const victorArticulos = Router()

victorArticulos.post('/registrar', registrarArticulos)
victorArticulos.put('/desactivar/id:Articulo', desactivarArticulo)

export default victorArticulos