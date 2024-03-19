import { listartipo_formato, registrartipo_formato, actualizartipo_formato, eliminartipo_formato, listaridtipo_formato }
 from "../controllers/serviciosControllers.js";
import { Router } from "express";

const Ruta=Router()
Ruta.get("/listar",listartipo_formato)
Ruta.post("/registrar",registrartipo_formato)
Ruta.put("/actualizar/:id",actualizartipo_formato)
Ruta.delete("/eliminar/:id",eliminartipo_formato)
Ruta.get("/listarid/:id",listaridtipo_formato)

export default Ruta;