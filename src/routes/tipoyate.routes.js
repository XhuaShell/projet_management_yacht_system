

import { Router } from "express";

export const nombre="tipoyate"; 
const {
    mostrarFormulario, 
    mostrarLista, 
    mostrarmain,
    mostrarActualizacion,
    mostrarEliminacion
} = await import(`../controller/${nombre}.controller.js`);
const {
    create,
    get,
    parch,
    deleter
}=await import (`../controller/${nombre}.controller.js`);


const router =  Router();

// Vista
router.get(`/${nombre}/formulario`, mostrarFormulario);
router.get(`/${nombre}/lista`, mostrarLista);
router.get(`/${nombre}/edicion`, mostrarActualizacion);
router.get(`/${nombre}/delete`, mostrarEliminacion); 
router.get(`/${nombre}/main`, mostrarmain);

// API
router.get(`/${nombre}/lista/1`,get);
router.post(`/${nombre}/formulario`,create);
router.patch(`/${nombre}/edicion`, parch);
router.delete(`/${nombre}/delete`, deleter); 




        

export default router;