import { Router } from "express";

const router =  Router();

router.get('/empleados', (req, res) => res.send('Obteniendo datos'));
router.post('/empleados', (req, res) => res.send('Agregando datos'));
router.put('/empleados', (req, res) => res.send('Actualizando datos'));
router.delete('/empleados', (req, res) => res.send('Eliminando datos'));

export default router;