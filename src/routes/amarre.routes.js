
export const nombre="amarre"; 
import { Router } from "express";
const {mostrarFormulario, 
    mostrarLista, 
    mostrarActualizacion, 
    mostrarEliminacion,
    mostrarmain
} = await import(`../controller/${nombre}.controller.js`);
const {
    create,
    parch,
    deleter,
    get
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