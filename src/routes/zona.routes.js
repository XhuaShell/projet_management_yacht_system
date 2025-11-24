export const nombre="zona"; 
import { Router } from "express";
const {mostrarFormulario, 
    mostrarLista, 
    mostrarmain
} = await import(`../controller/${nombre}.controller.js`);
const {
    create,
    get
}=await import (`../controller/${nombre}.controller.js`);

const router =  Router();

router.get(`/formulario`, mostrarFormulario);
router.get(`/lista`, mostrarLista);
router.get(`/main`, mostrarmain);

router.get(`/lista/1`,get);
router.post(`/formulario`,create);

export default router;