import { Router } from "express";

const router =  Router();

router.route('/empleados')
    .get((req, res) => {
        res.send('GET ejecutado');
    })
    .post((req, res) => {
        res.send('POST ejecutado');
    })
    .delete((req, res) => {
        res.send('DELETE ejecutado');
    });

export default router;