import { conexion } from "../database/conexion.js";


export const obtenerInteres = async (req, res) => {
    try {
        let sql = "select * from clientes"
        const [respuesta] = await conexion.query(sql)

        if(respuesta.length > 0){
            res.status(200).json(respuesta)
        }
        else{
            res.status(404).json({message: 'No hay datos registrados'})
        }
        
    }catch(error){
        res.status(500).json({message: 'error en el servidor' + error.message})
    } 
}



export const registrarInteres = async (req, res) => {
    try {
        let { mes, fecha, valor, alquiler } = req.body
        let sql = `INSERT INTO intereses (mes, fecha, valor, alquiler) VALUES ('${mes}','${fecha}','${valor}','${alquiler}')`
        const [respuesta] = await conexion.query(sql)

        if (respuesta.affectedRows > 0) {
            return res.status(200).json({ mensaje: 'Interés registrado correctamente' })
        } else {
            return res.status(404).json({ mensaje: 'No se pudo registrar el interés' })
        }
    } catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrió un error al registrar el interés' })
    }
}

export const eliminarInteres = async (req, res) => {
    try {
        let { idInteres } = req.params
        let sql = `DELETE FROM intereses WHERE id = ?`
        const [respuesta] = await conexion.query(sql, [idInteres])

        if (respuesta.affectedRows > 0) {
            return res.status(200).json({ mensaje: 'Interés eliminado correctamente' })
        } else {
            return res.status(404).json({ mensaje: 'No se encontró el interés para eliminar' })
        }
    } catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrió un error al eliminar el interés' })
    }
}

export const listarInteresesPagadosCliente = async (req, res) => {
    try {
        let { clienteId } = req.params
        let sql = `SELECT * FROM intereses WHERE cliente = ?`
        const [intereses] = await conexion.query(sql, [clienteId])

        if (intereses.length > 0) {
            return res.status(200).json({ intereses })
        } else {
            return res.status(404).json({ mensaje: 'No se encontraron intereses pagados para este cliente' })
        }
    } catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrió un error al listar los intereses pagados del cliente' })
    }
}

export const listarTotalInteresesMesAño = async (req, res) => {
    try {
        const { mes, año } = req.params;
        const sql = `SELECT SUM(valor) AS total FROM intereses WHERE MONTH(fecha) = ? AND YEAR(fecha) = ?`
        const [totalIntereses] = await conexion.query(sql, [mes, año])

        if (totalIntereses.length > 0) {
            return res.status(200).json({ total: totalIntereses[0].total })
        } else {
            return res.status(404).json({ mensaje: 'No se encontraron intereses para el mes y año especificados' })
        }
    } catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrió un error al listar el total de intereses recaudados' })
    }
}

export const listarInteresesPendientes = async (req, res) => {
    try {
        const sql = `SELECT MONTH(fecha) AS mes, SUM(valor) AS total FROM intereses GROUP BY MONTH(fecha)`
        const [intereses] = await conexion.query(sql)

        if (intereses.length > 0) {
            return res.status(200).json({ intereses })
        } else {
            return res.status(404).json({ mensaje: 'No se encontraron intereses pendientes por pagar' })
        }
    } catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrió un error al listar los intereses pendientes por pagar' })
    }
}
