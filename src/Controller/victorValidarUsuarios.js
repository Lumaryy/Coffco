// import { conexion } from "../database/conexion.js";
// import jwt from 'jsonwebtoken'
import { check } from 'express-validator';



// export const validarToken = async(req, res, next) => {
//     let token_user = req.headers['token'];

//     if (!token_user) {
//         next();
//     } else {
//         jwt.verify(token_user, process.env.SECRET, (error, decoded) => {
//             if (error) {
//                 next();
//             } else {
//                 next();
//             }
//         });
//     }
// };

export const validarCampos =  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty().isLength({ max: 50 }),
    check('direccion', 'La dirección es obligatoria').not().isEmpty().isLength({ max: 100 }),
    check('telefono', 'El teléfono es obligatorio').not().isEmpty().isLength({ max: 15 }),
    check('fecha_nac', 'La fecha de nacimiento es obligatoria').not().isEmpty(),
]