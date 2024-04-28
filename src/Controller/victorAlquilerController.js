import { conexion } from "../database/conexion.js";

export const registroAlquiler = async(req, res) => {
    try{
        const{valor,fecha,meses,descripcion,interes,cliente,articulo} = req.body

        const sql = `insert into alquiler (valor,fecha,meses,descripcion,interes,cliente,articulo) 
        values('${valor}','${fecha}', '${meses}','${descripcion}','${interes}','${cliente}','${articulo}')`
        const[respuesta] = await conexion.query(sql)

        if(respuesta.affectedRows>0) {
            return res.status(200).json({message: 'se registro correctamente'})
        }
        else{
            return res.status(404).json({message: 'no se registro correctamente'})
        }
    }
    catch(error) {
        return res.status(500).json({message: 'error' + error.message})
    }
}

export const actualizarAlquiler = async (req, res) => {
    try {
        const { idAlquiler } = req.params
        const { valor, fecha, meses, descripcion, interes, cliente, articulo } = req.body
        const sql = `UPDATE alquiler SET valor = ?, fecha = ?, meses = ?, descripcion = ?, interes = ?, cliente = ?, articulo = ? WHERE idalquiler = ?`;
        const [respuesta] = await conexion.query(sql, [valor, fecha, meses, descripcion, interes, cliente, articulo, idAlquiler])

        if (respuesta.affectedRows > 0) {
            return res.status(200).json({ mensaje: 'Alquiler actualizado correctamente' })
        } else {
            return res.status(404).json({ mensaje: 'No se encontró el alquiler para actualizar' })
        }
    } catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrió un error al actualizar el alquiler' })
    }
}
