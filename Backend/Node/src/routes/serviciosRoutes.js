import { listarServicios, registrarServicios, actualizarServicios, eliminarServicios, listaridServicios }
 from "../controllers/serviciosControllers.js";
import { Router } from "express";

const Ruta=Router()
Ruta.get("/listar",listarServicios)
Ruta.post("/registrar",registrarServicios)
Ruta.put("/actualizar/:id",actualizarServicios)
Ruta.delete("/eliminar/:id",eliminarServicios)
Ruta.get("/listarid/:id",listaridServicios)

export default Ruta

