import { Router } from 'express';
import { RegistrarDocs, ActualizarDocs } from '../controllers/AlmacenaDocController.js';
import { validarCamposRegistrar } from '../../validation/validarCamposDocumentos.js';
import { validarCamposActualizar } from '../../validation/validarActualiazarCampos.js';

const routerDocumento = Router();

routerDocumento.post('/documentos', validarCamposRegistrar, RegistrarDocs);
routerDocumento.patch('/:id_documentos', validarCamposActualizar, ActualizarDocs);

export default routerDocumento;
