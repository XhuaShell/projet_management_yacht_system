import { Router } from "express";

const router =  Router();

router.get('/club', (req, res) => {res.send('Hola')});

export default router;