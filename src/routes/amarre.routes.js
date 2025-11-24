
export const nombre="amarre"; 
import { Router } from "express";
const {
    mostrarFormulario, 
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
router.get(`/formulario`, mostrarFormulario);
router.get(`/lista`, mostrarLista);
router.get(`/edicion`, mostrarActualizacion);
router.get(`/delete`, mostrarEliminacion);
router.get(`/main`, mostrarmain);

// API
router.get(`/lista/1`,get);
router.post(`/formulario`,create);
router.patch(`/edicion`, parch);
router.delete(`/delete`, deleter);

export default router;