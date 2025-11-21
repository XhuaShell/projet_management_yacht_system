import { Router } from "express";

const router =  Router();

router.get('/socio', (req, res) => {res.send('Hola')});

export default router;