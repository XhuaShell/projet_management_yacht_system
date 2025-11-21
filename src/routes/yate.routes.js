import { Router } from "express";

const router =  Router();

router.get('/yate', (req, res) => {res.send('Hola')});

export default router;