import { Router } from "express";

const router =  Router();

router.get('pago', (req, res) => {res.send('Hola')});

export default router;