import {conexion} from "../database/conexion.js"
export  const listarServicios = async(req,res)=> {
   
try {
    let sql="select * from servicios"
    const [responde]= await conexion.query(sql)
    res.status(200).json(responde)
} catch (error) {
    res.status(500).json({"mensaje":"error en la conexion"}, error)
}
}

export  const registrarServicios = async(req,res)=> {
   
    try {
        let {tipo_servicios, fk_id_muestra} = req.body /* tipo de datos de la tabla los atributos */
        let sql=`insert into servicios(tipo_servicio, fk_id_muestra) 
        values('${tipo_servicios}', '${fk_id_muestra}')"`/* realisa la consulta sql que van `` */
        const [responde]= await conexion.query(sql)
        if(responde.affectedRows >0){
            return res.status(200).json({"mensaje":"se registro correctamente el usuario"})
        }
        else{
            return res.status(404).json({"mensaje":"no se registro correctamente el usuario"})
        }
    } catch (error) {
        
    }
    res.status(200).json(responde)

}
export const actualizarServicios=async(req,res)=>{
    let {id_servicios,tipo_servicios,fk_id_muestra}=req.body
    let id=req.params.id
    let sql=`update muestra set id_servicios='${id_servicios}', tipo_servicios='${tipo_servicios}',fk_id_muestra='${fk_id_muestra}'
     where id_muestra=${id}`
    const [responde]=await conexion.query(sql)
    if(responde.affectedRows>0){
        return res.status(200).json({"message":"se actualizo con exito el usuario"})
    }
    else{
        return res.status(404).json({"message":"no se actualizo el usuario"})
    }
    
}
export const eliminarServicios= async(req,res)=>{
    try {
        let id=req.params.id
        let sql =`delete from servicios where id_servicio=${id}`
        const [responde]=await conexion.query(sql)
        if(responde.affectedRows>0){
            res.status(200).json({"message":"usuairo eliminado correctamente "})
        }
        else{
            res.status(404).json({"message":"usuario no eliminado correctamente"})
        }  
    } catch (error) {
        res.status(500).json({"message":"error en la conexion"+error.menssage})
    }
}

export const listaridServicios=async(req,res)=>{
    try {
        let id=req.params.id
        let sql=`select * from servicios where id_servicios=${id}`
        const [responde]= await conexion.query(sql)
        if(responde.length == 1){
            res.status(200).json(responde)
        }
        else{
            res.status(500).json({"message":"usuario no encontrado"})
        }
        
    } catch (error) {
        res.status(500).json({"menssage":"error en la conexion en la base de datos "+error.menssage})
    }
    }

