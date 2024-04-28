import { conexion } from "../database/conexion.js";

export const listarClientes = async (req, res) => {
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

export const registarClientes = async (req, res) => {
    try {
        let { nombre, direccion, telefono, fecha_nac } = req.body;
        let sql = `INSERT INTO clientes (nombre, direccion, telefono, fecha_nac) VALUES ('${nombre}', '${direccion}', '${telefono}', '${fecha_nac}')`;
        const [respuesta] = await conexion.query(sql);
        if (respuesta.affectedRows > 0) {
            return res.status(200).json({ message: 'Se registró el cliente con éxito' });
        } else {
            return res.status(404).json({ message: 'No se pudo registrar el cliente' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error: ' + error.message });
    }
}


export const eliminarClientes = async(req,res) => {
    try {
        let id= req.params.id
        let sql = `delete from clientes where id = ${id}`

        const [respuesta] = await conexion.query(sql)
        if(respuesta.affectedRows>0) {
            res.status(200).json({message: 'se elimino el cliente con exito'})
        }
        else{
            res.status(404).json({message:'el cliente no se elimino correctamente'})
        }
    }
    catch(error) {
        res.status(500).json({message:'error' + error.message})

    }
}

export const actualizarClientes = async(req, res) => {
    try {
        let id=req.params.id
        let {nombre,direccion,telefono,fecha_nac}=req.body
        let sql = `update clientes set nombre='${nombre}',direccion='${direccion}',telefono='${telefono}',fecha_nac='${fecha_nac}' where id = ${id}`
        const [responde] = await conexion.query(sql)
        if(responde.affectedRows>0) {
            return res.status(200).json({message:'se actualizo con exito el cliente'})
        }
        else {
            return res.status(404).json({message:'no se actualizo correctamente el cliente'})
        }
    }
    catch(error) {
        return res.status(500).json({message:'error en la actualizacion' + error.message})
    }
}