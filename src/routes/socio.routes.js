import { Router } from "express";
import { getSocio } from '../controller/socio.controller.js';
const router =  Router();


router.route('/socio')
    .get((req,res)=>{
        res.render('formulario')
    })
    .post(getSocio)
    .delete((req, res) => {
        res.send('DELETE ejecutado');
    });

export default router;