import { Router } from "express";
import { 
    mostrarFormularioSocio, 
    mostrarListaSocio,
    mostrarActualizacionSocio,
    mostrarEliminacionSocio

} from '../controller/socio.controller.js';

import { 
    createSocio,
    parchSocio,
    deleteSocio
} from '../controller/socio.controller.js';


const router =  Router();

// Vista
// Mostrar el formulario
router.get('/socio/formulario', mostrarFormularioSocio);
// Listar todos los socios
router.get('/socio/lista', mostrarListaSocio);
////update
router.get('/socio/edicion', mostrarActualizacionSocio);
//mostrar delete
router.get('/socio/delete/:cod',mostrarEliminacionSocio);


//API
// Crear un socio (POST)
router.post('/socio/formulario', createSocio);
//actualizaSocio
router.patch('/socio/edicion',parchSocio);
//delete
router.delete('/socio/delete',deleteSocio);




        

export default router;