import {conexion} from "../database/conexion.js"

export  const listartipo_formato = async(req,res)=> {
   
    try {
    let sql="select * from tipo_formato"
    const [responde]= await conexion.query(sql)
    res.status(200).json(responde)
} catch (error) {
    res.status(500).json({"mensaje":"error en la conexion"}, error)
}
}

export  const registrartipo_formato = async(req,res)=> {
   
    try {
        let {id_formato, fk_id_servicios} = req.body /* tipo de datos de la tabla los atributos */
        let sql=`insert into tipo_formato(id_formato, fk_id_servicios) 
        values('${id_formato}', '${fk_id_servicios}')"`/* realisa la consulta sql que van `` */
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
export const actualizartipo_formato=async(req,res)=>{
    let {id_formato, fk_id_servicios}=req.body
    let id=req.params.id
    let sql=`update tipo_formato set id_formato='${id_formato}',fk_id_servicios='${fk_id_servicios}'
     where id_formato=${id}`
    const [responde]=await conexion.query(sql)
    if(responde.affectedRows>0){
        return res.status(200).json({"message":"se actualizo con exito el usuario"})
    }
    else{
        return res.status(404).json({"message":"no se actualizo el usuario"})
    }
    
}
export const eliminartipo_formato= async(req,res)=>{
    try {
        let id=req.params.id
        let sql =`delete from tipo_formato where id_formato=${id}`
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

export const listaridtipo_formato=async(req,res)=>{
    try {
        let id=req.params.id
        let sql=`select * from tipo_formato where id_formato=${id}`
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