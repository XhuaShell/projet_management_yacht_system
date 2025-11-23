import { Router } from "express";
import { getSocio } from '../controller/socio.controller.js';
import { createSocio } from '../controller/socio.controller.js';
const router =  Router();


router.route('/socio')
    .get(getSocio)
    .post(createSocio)
    .delete((req, res) => {
        res.send('DELETE ejecutado');
    });          

export default router;