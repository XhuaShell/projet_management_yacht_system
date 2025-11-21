import { Router } from "express";

const router =  Router();

router.get('/forms', (req, res) => {res.send('Hola')});

export default router;