import { Router } from "express";

export const nombre = "tipoyate";
const {
    mostrarFormulario,
    mostrarLista,
    mostrarmain,
    mostrarActualizacion,
    mostrarEliminacion,
} = await import(`../controller/${nombre}.controller.js`);
const { create, get, parch, deleter } = await import(
    `../controller/${nombre}.controller.js`
);

const router = Router();

// Vista
router.get(`/formulario`, mostrarFormulario);
router.get(`/lista`, mostrarLista);
router.get(`/edicion`, mostrarActualizacion);
router.get(`/delete`, mostrarEliminacion);
router.get(`/main`, mostrarmain);

// API
router.get(`/lista/1`, get);
router.post(`/formulario`, create);
router.delete(`/delete`, deleter);

export default router;
