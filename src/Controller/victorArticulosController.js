import { conexion } from "../database/conexion.js";

export const registrarArticulos = async(req, res) => {
    try {
    let {nombre,tipo} = req.body
    let sql = `insert into articulos(nombre,tipo)values('${nombre}','${tipo}')`

    const {respuesta} = await conexion.query(sql)
    if(respuesta.affectedRows>0){
        return res.status(200).json({message: 'se registro correctamente el articulo'})
    }
    else {
        return res.status(404).json({message: 'no se registro correctamente el articulo'})
    }
    } catch(error){
        return res.status(500).json({message: 'error' +error.message})
    }
}
export const desactivarArticulo = async (req, res) => {
    try {
        const { idArticulo } = req.params;
        const sql = `UPDATE articulos SET activo = 0 WHERE idarticulo = ?`
        const { respuesta } = await conexion.query(sql, [idArticulo])

        if (respuesta.affectedRows > 0) {
            return res.status(200).json({ mensaje: 'Artículo desactivado correctamente' })
        } else {
            return res.status(404).json({ mensaje: 'No se encontró el artículo para desactivar' })
        }
    } catch (error) {
        return res.status(500).json({ mensaje: ' error al desactivar el artículo' })
    }
}
