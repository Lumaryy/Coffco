import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import victorAlquiler from './Routes/victorAlquilerRouter.js';
import victorArticulos from './Routes/victorArticulosRoute.js';
import victorClienteRouter from './Routes/victorClienteRouter.js';
import victorInteres from './Routes/victorInteresRouter.js';
import validar from './Routes/victorValidarRoutes.js'
import { conexion } from './database/conexion.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/victor', validar)
app.use('/victor', victorAlquiler);
app.use('/victor', victorArticulos);
app.use('/victor', victorClienteRouter);
app.use('/victor', victorInteres);

conexion
  .getConnection()
  .then(() => {
    console.log('Conexión establecida con la base de datos.');
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}.`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });
