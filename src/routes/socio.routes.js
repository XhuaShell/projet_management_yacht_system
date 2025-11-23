import { Router } from "express";
import { getFormularioSocio } from '../controller/socio.controller.js';
import { createSocio } from '../controller/socio.controller.js';
import { getSocio } from '../controller/socio.controller.js';
const router =  Router();


// Mostrar el formulario
router.get('/socio/formulario', getFormularioSocio);

// Listar todos los socios
router.get('/socio/lista', getSocio);

// Crear un socio (POST)
router.post('/socio/formulario', createSocio);

// Eliminar (DELETE)
/*router.delete('/socio', deleteSocio);*/
        

export default router;