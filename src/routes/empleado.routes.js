import { Router } from "express";
import { 
    mostrarFormulario, 
    mostrarLista,
    mostrarActualizacion,
    mostrarEliminacion

} from '../controller/empleado.controller.js';

import { 
    create,
    parch,
    deleter
} from '../controller/empleado.controller.js';


const router =  Router();
    
// Vista
// Mostrar el formulario
router.get('/empleado/formulario', mostrarFormulario);
// Listar todos los socios
router.get('/empleado/lista', mostrarLista);
////update
router.get('/empleado/edicion', mostrarActualizacion);
//mostrar delete
router.get('/empleado/delete',mostrarEliminacion);


//API
// Crear un empleado (POST)
router.post('/empleado/formulario', create);
//actualizaSocio
router.patch('/empleado/edicion',parch);
//delete
router.delete('/empleado/delete',deleter);




        

export default router;