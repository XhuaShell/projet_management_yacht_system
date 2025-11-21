import { Router } from "express";

const router =  Router();

router.get('/asignacion', (req, res) => {res.send('Hola')});

export default router;